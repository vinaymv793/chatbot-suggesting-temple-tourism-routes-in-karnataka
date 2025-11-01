import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Language } from './types';
import { getBotResponse } from './services/geminiService';
import { UI_TEXT, INITIAL_TEMPLES_DATA } from './constants';
import LanguageToggle from './components/LanguageToggle';
import ChatBubble from './components/ChatBubble';
import LandingScreen from './components/LandingScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<'landing' | 'chat'>('landing');
  const [language, setLanguage] = useState<Language>('en');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screen === 'chat' && messages.length === 0) {
      setMessages([
        {
          id: 'init',
          role: 'model',
          text: UI_TEXT[language].greeting.text,
          temples: INITIAL_TEMPLES_DATA[language],
          quickReplies: UI_TEXT[language].greeting.quickReplies,
        },
      ]);
    }
  }, [screen, messages.length, language]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: prompt,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const botResponseData = await getBotResponse(prompt, language);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: botResponseData.text,
        temples: botResponseData.temples,
        quickReplies: botResponseData.quickReplies
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to get bot response:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: language === 'kn' ? "ಕ್ಷಮಿಸಿ, ದೋಷವೊಂದು ಸಂಭವಿಸಿದೆ." : "Sorry, an error occurred.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  const handleQuickReplyClick = (replyText: string) => {
    sendMessage(replyText);
  };

  const currentText = UI_TEXT[language];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-red-600 via-red-500 to-yellow-400">
      {screen === 'landing' ? (
        <LandingScreen 
          onExplore={() => setScreen('chat')}
          language={language}
          setLanguage={setLanguage}
        />
      ) : (
        <>
          <header className="flex items-center justify-between p-4 bg-black/20 text-white shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setScreen('landing')}
                className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label={language === 'kn' ? 'ಹಿಂದಕ್ಕೆ ಹೋಗಿ' : 'Go back'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <h1 className={`text-xl font-bold ${language === 'kn' ? 'font-kannada' : ''}`}>
                {currentText.title}
              </h1>
            </div>
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </header>
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="flex flex-col space-y-4">
              {messages.map((msg, index) => (
                <ChatBubble 
                  key={msg.id} 
                  message={msg} 
                  language={language}
                  showQuickReplies={msg.role === 'model' && index === messages.length - 1 && !isLoading}
                  onQuickReplyClick={handleQuickReplyClick}
                />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/90 text-red-900 p-4 rounded-xl max-w-sm shadow-md">
                     <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-75"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-150"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300"></div>
                        <span className={`ml-2 text-sm ${language === 'kn' ? 'font-kannada' : ''}`}>{currentText.loading}</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </main>

          <footer className="p-4 bg-white/10 backdrop-blur-sm">
            <form onSubmit={handleSend} className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-lg">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={currentText.placeholder}
                className={`flex-1 bg-transparent px-4 py-2 text-gray-800 focus:outline-none ${language === 'kn' ? 'font-kannada' : ''}`}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`p-3 rounded-full text-white transition-colors duration-200 flex items-center justify-center ${
                  isLoading || !input.trim()
                    ? 'bg-yellow-300 cursor-not-allowed'
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;