
import { GoogleGenAI, Type } from "@google/genai";
import { Language, TempleInfo } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    response_text: {
      type: Type.STRING,
      description: "A conversational reply to the user's query in the specified language.",
    },
    temples: {
      type: Type.ARRAY,
      description: "A list of temples relevant to the user's query.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: "The name of the temple in the specified language.",
          },
          history: {
            type: Type.STRING,
            description: "A brief history of the temple in the specified language.",
          },
          image_url: {
            type: Type.STRING,
            description: "A publicly accessible URL for an image of the temple.",
          },
          travel_tips: {
            type: Type.STRING,
            description: "Actionable travel tips for visiting this temple in the specified language."
          }
        },
        required: ["name", "history", "image_url"],
      },
    },
    quick_replies: {
      type: Type.ARRAY,
      description: "A list of 3-4 brief, relevant follow-up questions or actions to guide the user.",
      items: { type: Type.STRING }
    },
  },
  required: ["response_text"],
};

export const getBotResponse = async (prompt: string, language: Language): Promise<{ text: string; temples: TempleInfo[]; quickReplies: string[] }> => {
  const langInstruction = language === 'kn' ? 'Kannada' : 'English';

  const systemInstruction = `You are a helpful travel assistant named 'Yatri Mitra' specializing in Karnataka's temple tourism. Always respond in ${langInstruction}. When asked about temples, provide a brief history, relevant travel tips, and a publicly accessible image URL for each temple. Also, suggest 3-4 brief, relevant follow-up questions or actions as 'quick_replies' to guide the user. Structure your entire response as a single, valid JSON object following the provided schema. Do not include any text or markdown formatting outside of the JSON object.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Language: ${langInstruction}. User's question: ${prompt}`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text.trim();
    const parsedResponse = JSON.parse(jsonText);
    
    return {
      text: parsedResponse.response_text || "I couldn't find a direct answer, but here is some information.",
      temples: parsedResponse.temples || [],
      quickReplies: parsedResponse.quick_replies || []
    };
  } catch (error) {
    console.error("Error fetching from Gemini API:", error);
    const errorMessage = language === 'kn' 
        ? "ಕ್ಷಮಿಸಿ, ಪ್ರತಿಕ್ರಿಯೆ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ." 
        : "Sorry, I couldn't get a response. Please try again.";
    return { text: errorMessage, temples: [], quickReplies: [] };
  }
};