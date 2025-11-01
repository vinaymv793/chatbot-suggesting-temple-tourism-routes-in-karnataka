import { Language, TempleInfo } from './types';

export const UI_TEXT: Record<Language, {
  title: string;
  placeholder: string;
  send: string;
  greeting: { text: string; quickReplies: string[] };
  loading: string;
  landingTitle: string;
  landingSubtitle: string;
  exploreButton: string;
}> = {
  en: {
    title: "Karnataka Temple Tourism Guide",
    placeholder: "Ask about temple routes in Karnataka...",
    send: "Send",
    greeting: {
      text: "Hello! I am your guide for temple tourism in Karnataka. Here are a few famous temples to get you started. You can ask me for more details or about other routes!",
      quickReplies: ["Tell me more about Belur", "Show temples in North Karnataka", "Plan a 2-day trip"]
    },
    loading: "Thinking...",
    landingTitle: "Karnataka Temple Tourism",
    landingSubtitle: "Your AI guide to the divine heritage of Karnataka.",
    exploreButton: "Explore",
  },
  kn: {
    title: "ಕರ್ನಾಟಕ ದೇವಾಲಯ ಪ್ರವಾಸೋದ್ಯಮ ಮಾರ್ಗದರ್ಶಿ",
    placeholder: "ಕರ್ನಾಟಕದ ದೇವಾಲಯ ಮಾರ್ಗಗಳ ಬಗ್ಗೆ ಕೇಳಿ...",
    send: "ಕಳುಹಿಸಿ",
    greeting: {
        text: "ನಮಸ್ಕಾರ! ನಾನು ಕರ್ನಾಟಕದ ದೇವಾಲಯ ಪ್ರವಾಸೋದ್ಯಮಕ್ಕಾಗಿ ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಿ. ನಿಮ್ಮ ಅನ್ವೇಷಣೆ ಪ್ರಾರಂಭಿಸಲು ಇಲ್ಲಿ ಕೆಲವು ಪ್ರಸಿದ್ಧ ದೇವಾಲಯಗಳಿವೆ. ನೀವು ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ ಅಥವಾ ಇತರ ಮಾರ್ಗಗಳ ಬಗ್ಗೆ ಕೇಳಬಹುದು!",
        quickReplies: ["ಬೇಲೂರು ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಸಿ", "ಉತ್ತರ ಕರ್ನಾಟಕದ ದೇವಸ್ಥಾನಗಳನ್ನು ತೋರಿಸಿ", "2 ದಿನದ ಪ್ರವಾಸವನ್ನು ಯೋಜಿಸಿ"]
    },
    loading: "ಯೋಚಿಸುತ್ತಿದೆ...",
    landingTitle: "ಕರ್ನಾಟಕ ದೇವಾಲಯ ಪ್ರವಾಸೋದ್ಯಮ",
    landingSubtitle: "ಕರ್ನಾಟಕದ ದೈವಿಕ ಪರಂಪರೆಗೆ ನಿಮ್ಮ AI ಮಾರ್ಗದರ್ಶಿ.",
    exploreButton: "ಅನ್ವೇಷಿಸಿ",
  }
};

export const INITIAL_TEMPLES_DATA: Record<Language, TempleInfo[]> = {
  en: [
    {
      name: "Chennakeshava Temple, Belur",
      history: "Commissioned in the 12th century, this temple is a spectacular example of Hoysala architecture dedicated to Lord Vishnu. It's world-renowned for its exquisite sculptures, gravity pillar (Kartika Deepotsava), and the bracket figures of dancing damsels (Madanikas) that adorn the walls.",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruqD7NJIa-nwZXkNpwOVerdXj4jCFFLvkTw&s",
      travel_tips: "Hire a certified guide to understand the intricate carvings. Wear comfortable footwear. Photography is allowed, but tripods may be restricted."
    },
    {
      name: "Hoysaleswara Temple, Halebidu",
      history: "A magnificent 12th-century twin temple dedicated to Lord Shiva. Despite being incomplete, it is famous for its incredibly detailed friezes that run along the outer walls, depicting scenes from Hindu epics, animals, and celestial beings. The level of detail is simply breathtaking.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Halebidu_temple.jpg/1280px-Halebidu_temple.jpg",
      travel_tips: "Belur and Halebidu are often visited together as they are only 16 km apart. A guide is highly recommended here as well to spot the detailed stories in the friezes."
    },
    {
      name: "Manjunatha Temple, Dharmasthala",
      history: "This unique 800-year-old temple is a beacon of religious harmony. Lord Shiva, in the form of Manjunatha, is worshipped by Vaishnavite priests, while the temple's administration is managed by a Jain family (Heggade). The temple is also famous for its charitable activities.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Dharmasthala_temple_front_view.jpg/1024px-Dharmasthala_temple_front_view.jpg",
      travel_tips: "Follow a strict dress code (no shorts or sleeveless tops). Don't miss the free, wholesome meals served to all devotees at the Annapoorna dining hall."
    },
    {
      name: "Kukke Subramanya Temple",
      history: "Nestled in the lush Western Ghats, this ancient temple is dedicated to Lord Subramanya, the divine serpent king. It is a major pilgrimage center in India, especially for performing rituals to remedy 'Sarpa Dosha' (the serpent curse).",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kukke_Subramanya_temple_front_view.jpg/1024px-Kukke_Subramanya_temple_front_view.jpg",
      travel_tips: "The temple is extremely popular, so expect long queues, especially during festivals. It's best to visit during the monsoon or winter to enjoy the surrounding natural beauty."
    },
     {
      name: "Sringeri Sharada Peetham",
      history: "Established in the 8th century by Adi Shankaracharya, Sringeri Sharada Peetham is one of the four most important Hindu Advaita Vedanta monasteries. Located on the banks of the Tunga River, it is a revered center for learning, culture, and spirituality, with the main shrine dedicated to the goddess of knowledge, Sharadamba.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sringeri_temple.jpg/1280px-Sringeri_temple.jpg",
      travel_tips: "Maintain silence and adhere to the modest dress code. You can feed the sacred fish at the ghats of the Tunga River. The atmosphere is very serene and peaceful."
    },
    {
      name: "Virupaksha Temple, Hampi",
      history: "Located in the heart of the Hampi bazaar, this is the oldest and principal temple in the Vijayanagara ruins. Dedicated to Lord Shiva as Virupaksha, it has been a functioning temple since the 7th century, surviving the fall of the empire and continuing to attract devotees and tourists alike.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Virupaksha_temple_hampi.jpg/1280px-Virupaksha_temple_hampi.jpg",
      travel_tips: "Hampi is a vast area; consider renting a bicycle or an auto-rickshaw for the day to cover the major sites. Carry plenty of water, especially during summer."
    },
    {
      name: "Badami Cave Temples",
      history: "Dating back to the 6th century Chalukya dynasty, this complex consists of four stunning rock-cut caves. Each cave is a marvel of early Indian architecture, featuring intricate carvings of Hindu deities like Shiva and Vishnu, as well as Jain Tirthankaras in the fourth cave.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Badami_Cave_3_sculptures.jpg/1280px-Badami_Cave_3_sculptures.jpg",
      travel_tips: "The caves involve climbing stairs, so wear comfortable shoes. The view of the Agastya Lake from the caves is spectacular, especially during sunrise or sunset."
    },
    {
      name: "Durga Temple, Aihole",
      history: "Part of a larger temple complex in Aihole, often called the 'cradle of Indian temple architecture,' the Durga temple dates back to the 7th or 8th century. Its unique apsidal, or semi-circular, shape is thought to mimic Buddhist chaitya halls. The temple is renowned for its elaborate carvings.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Durga_temple_Aihole_front_view.jpg/1280px-Durga_temple_Aihole_front_view.jpg",
      travel_tips: "Aihole, Pattadakal, and Badami form a popular tourist circuit. It's best to hire a single taxi for the day to cover all three historical sites comfortably."
    }
  ],
  kn: [
    {
      name: "ಚೆನ್ನಕೇಶವ ದೇವಸ್ಥಾನ, ಬೇಲೂರು",
      history: "12ನೇ ಶತಮಾನದಲ್ಲಿ ನಿರ್ಮಿಸಲಾದ ಈ ದೇವಾಲಯವು ವಿಷ್ಣುವಿಗೆ ಸಮರ್ಪಿತವಾದ ಹೊಯ್ಸಳ ವಾಸ್ತುಶಿಲ್ಪದ ಅದ್ಭುತ ಉದಾಹರಣೆಯಾಗಿದೆ. ಇದು ತನ್ನ ಉತ್ಕೃಷ್ಟ ಶಿಲ್ಪಗಳು, ಗುರುತ್ವಾಕರ್ಷಣಾ ಸ್ತಂಭ (ಕಾರ್ತಿಕ ದೀಪೋತ್ಸವ), ಮತ್ತು ಗೋಡೆಗಳನ್ನು ಅಲಂಕರಿಸುವ ನೃತ್ಯಗಾತಿಯರ (ಮದನಿಕೆಗಳು) ವಿಗ್ರಹಗಳಿಗೆ ವಿಶ್ವಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruqD7NJIa-nwZXkNpwOVerdXj4jCFFLvkTw&s",
      travel_tips: "ಸಂಕೀರ್ಣವಾದ ಕೆತ್ತನೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಪ್ರಮಾಣೀಕೃತ ಮಾರ್ಗದರ್ಶಕರನ್ನು ನೇಮಿಸಿಕೊಳ್ಳಿ. ಆರಾಮದಾಯಕ ಪಾದರಕ್ಷೆಗಳನ್ನು ಧರಿಸಿ. ಛಾಯಾಗ್ರಹಣಕ್ಕೆ ಅನುಮತಿ ಇದೆ, ಆದರೆ ಟ್ರೈಪಾಡ್‌ಗಳನ್ನು ನಿರ್ಬಂಧಿಸಬಹುದು."
    },
    {
      name: "ಹೊಯ್ಸಳೇಶ್ವರ ದೇವಸ್ಥಾನ, ಹಳೇಬೀಡು",
      history: "ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ 12ನೇ ಶತಮಾನದ ಭವ್ಯವಾದ ಅವಳಿ ದೇವಾಲಯ. ಅಪೂರ್ಣವಾಗಿದ್ದರೂ, ಇದು ಹೊರಗಿನ ಗೋಡೆಗಳ ಮೇಲೆ ಹಿಂದೂ ಮಹಾಕಾವ್ಯಗಳು, ಪ್ರಾಣಿಗಳು ಮತ್ತು ದೇವತೆಗಳ ದೃಶ್ಯಗಳನ್ನು ಚಿತ್ರಿಸುವ ನಂಬಲಾಗದಷ್ಟು ವಿವರವಾದ ಕೆತ್ತನೆಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ವಿವರಗಳ ಮಟ್ಟವು ಉಸಿರುಗಟ್ಟಿಸುವಂತಿದೆ.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Halebidu_temple.jpg/1280px-Halebidu_temple.jpg",
      travel_tips: "ಬೇಲೂರು ಮತ್ತು ಹಳೇಬೀಡು ಕೇವಲ 16 ಕಿ.ಮೀ ದೂರದಲ್ಲಿರುವುದರಿಂದ ಇವೆರಡನ್ನೂ ಒಟ್ಟಿಗೆ ಭೇಟಿ ಮಾಡಲಾಗುತ್ತದೆ. ಕೆತ್ತನೆಗಳಲ್ಲಿನ ವಿವರವಾದ ಕಥೆಗಳನ್ನು ಗುರುತಿಸಲು ಇಲ್ಲಿಯೂ ಮಾರ್ಗದರ್ಶಕರನ್ನು ನೇಮಿಸಿಕೊಳ್ಳುವುದು ಉತ್ತಮ."
    },
    {
      name: "ಮಂಜುನಾಥ ದೇವಸ್ಥಾನ, ಧರ್ಮಸ್ಥಳ",
      history: "800 ವರ್ಷಗಳಷ್ಟು ಹಳೆಯದಾದ ಈ ವಿಶಿಷ್ಟ ದೇವಾಲಯವು ಧಾರ್ಮಿಕ ಸಾಮರಸ್ಯದ ದ್ಯೋತಕವಾಗಿದೆ. ಇಲ್ಲಿ ಮಂಜುನಾಥನ ರೂಪದಲ್ಲಿರುವ ಶಿವನನ್ನು ವೈಷ್ಣವ ಅರ್ಚಕರು ಪೂಜಿಸುತ್ತಾರೆ, ಆದರೆ ದೇವಾಲಯದ ಆಡಳಿತವನ್ನು ಜೈನ ಕುಟುಂಬ (ಹೆಗ್ಗಡೆ) ನಿರ್ವಹಿಸುತ್ತದೆ. ಈ ದೇವಾಲಯವು ತನ್ನ ದತ್ತಿ ಚಟುವಟಿಕೆಗಳಿಗೂ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Dharmasthala_temple_front_view.jpg/1024px-Dharmasthala_temple_front_view.jpg",
      travel_tips: "ಕಟ್ಟುನಿಟ್ಟಾದ ಉಡುಗೆಯನ್ನು ಅನುಸರಿಸಿ (ಶಾರ್ಟ್ಸ್ ಅಥವಾ ತೋಳಿಲ್ಲದ ಬಟ್ಟೆಗಳನ್ನು ಧರಿಸಬಾರದು). ಅನ್ನಪೂರ್ಣ ಭೋಜನಾಲಯದಲ್ಲಿ ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ನೀಡಲಾಗುವ ಉಚಿತ, ಸ್ವಾದಿಷ್ಟ ಊಟವನ್ನು ತಪ್ಪಿಸಿಕೊಳ್ಳಬೇಡಿ."
    },
    {
      name: "ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ",
      history: "ಹಚ್ಚ ಹಸಿರಿನ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಮಡಿಲಲ್ಲಿರುವ ಈ ಪ್ರಾಚೀನ ದೇವಾಲಯವು ದೈವಿಕ ಸರ್ಪ ರಾಜನಾದ ಸುಬ್ರಹ್ಮಣ್ಯನಿಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ಇದು ಭಾರತದ ಪ್ರಮುಖ ಯಾತ್ರಾ ಕೇಂದ್ರವಾಗಿದೆ, ವಿಶೇಷವಾಗಿ 'ಸರ್ಪ ದೋಷ' ನಿವಾರಣೆಗೆ ಸಂಬಂಧಿಸಿದ ಆಚರಣೆಗಳನ್ನು ಮಾಡಲು.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kukke_Subramanya_temple_front_view.jpg/1024px-Kukke_Subramanya_temple_front_view.jpg",
      travel_tips: "ಈ ದೇವಾಲಯವು ಅತ್ಯಂತ ಜನಪ್ರಿಯವಾಗಿರುವುದರಿಂದ, ವಿಶೇಷವಾಗಿ ಹಬ್ಬಗಳ ಸಮಯದಲ್ಲಿ ದೀರ್ಘ ಸರತಿ ಸಾಲುಗಳನ್ನು ನಿರೀಕ್ಷಿಸಿ. ಸುತ್ತಮುತ್ತಲಿನ ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯವನ್ನು ಆನಂದಿಸಲು ಮಳೆಗಾಲ ಅಥವಾ ಚಳಿಗಾಲದಲ್ಲಿ ಭೇಟಿ ನೀಡುವುದು ಉತ್ತಮ."
    },
    {
      name: "ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠ",
      history: "8ನೇ ಶತಮಾನದಲ್ಲಿ ಆದಿ ಶಂಕರಾಚಾರ್ಯರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠವು ನಾಲ್ಕು ಪ್ರಮುಖ ಹಿಂದೂ ಅದ್ವೈತ ವೇದಾಂತ ಮಠಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ತುಂಗಾ ನದಿಯ ದಡದಲ್ಲಿರುವ ಇದು, ಜ್ಞಾನ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆಯ ಪೂಜ್ಯ ಕೇಂದ್ರವಾಗಿದೆ. ಮುಖ್ಯ ದೇವಾಲಯವು ಜ್ಞಾನದ ದೇವತೆಯಾದ ಶಾರದಾಂಭೆಗೆ ಸಮರ್ಪಿತವಾಗಿದೆ.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sringeri_temple.jpg/1280px-Sringeri_temple.jpg",
      travel_tips: "ಮೌನವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಸಾಧಾರಣ ಉಡುಗೆಯನ್ನು ಧರಿಸಿ. ತುಂಗಾ ನದಿಯ ಘಟ್ಟಗಳಲ್ಲಿ ಪವಿತ್ರ ಮೀನುಗಳಿಗೆ ಆಹಾರವನ್ನು ನೀಡಬಹುದು. ಇಲ್ಲಿನ ವಾತಾವರಣವು ಅತ್ಯಂತ ಪ್ರಶಾಂತವಾಗಿದೆ."
    },
    {
      name: "ವಿರೂಪಾಕ್ಷ ದೇವಸ್ಥಾನ, ಹಂಪಿ",
      history: "ಹಂಪಿ ಬಜಾರ್‌ನ ಹೃದಯಭಾಗದಲ್ಲಿರುವ ಇದು ವಿಜಯನಗರದ ಅವಶೇಷಗಳಲ್ಲಿನ ಅತ್ಯಂತ ಹಳೆಯ ಮತ್ತು ಪ್ರಧಾನ ದೇವಾಲಯವಾಗಿದೆ. ವಿರೂಪಾಕ್ಷನಾಗಿ ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ ಈ ದೇವಾಲಯವು 7ನೇ ಶತಮಾನದಿಂದಲೂ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ. ಸಾಮ್ರಾಜ್ಯದ ಪತನದ ನಂತರವೂ ಉಳಿದುಕೊಂಡು, ಭಕ್ತರನ್ನು ಮತ್ತು ಪ್ರವಾಸಿಗರನ್ನು ಆಕರ್ಷಿಸುತ್ತಿದೆ.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Virupaksha_temple_hampi.jpg/1280px-Virupaksha_temple_hampi.jpg",
      travel_tips: "ಹಂಪಿ ಒಂದು ವಿಶಾಲವಾದ ಪ್ರದೇಶ; ಪ್ರಮುಖ ಸ್ಥಳಗಳನ್ನು ನೋಡಲು ದಿನದ ಮಟ್ಟಿಗೆ ಬೈಸಿಕಲ್ ಅಥವಾ ಆಟೋ-ರಿಕ್ಷಾವನ್ನು ಬಾಡಿಗೆಗೆ ತೆಗೆದುಕೊಳ್ಳುವುದನ್ನು ಪರಿಗಣಿಸಿ. ವಿಶೇಷವಾಗಿ ಬೇಸಿಗೆಯಲ್ಲಿ ಸಾಕಷ್ಟು ನೀರನ್ನು ಒಯ್ಯಿರಿ."
    },
    {
      name: "ಬಾದಾಮಿ ಗುಹೆ ದೇವಾಲಯಗಳು",
      history: "6ನೇ ಶತಮಾನದ ಚಾಲುಕ್ಯ ರಾಜವಂಶಕ್ಕೆ ಸೇರಿದ ಈ ಸಂಕೀರ್ಣವು ನಾಲ್ಕು ಅದ್ಭುತವಾದ ಬಂಡೆಯಿಂದ ಕೆತ್ತಿದ ಗುಹೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ. ಪ್ರತಿ ಗುಹೆಯು ಆರಂಭಿಕ ಭಾರತೀಯ ವಾಸ್ತುಶಿಲ್ಪದ ಅದ್ಭುತವಾಗಿದ್ದು, ಶಿವ ಮತ್ತು ವಿಷ್ಣುವಿನಂತಹ ಹಿಂದೂ ದೇವತೆಗಳ ಸಂಕೀರ್ಣ ಕೆತ್ತನೆಗಳನ್ನು ಮತ್ತು ನಾಲ್ಕನೇ ಗುಹೆಯಲ್ಲಿ ಜೈನ ತೀರ್ಥಂಕರರನ್ನು ಒಳಗೊಂಡಿದೆ.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Badami_Cave_3_sculptures.jpg/1280px-Badami_Cave_3_sculptures.jpg",
      travel_tips: "ಗುಹೆಗಳನ್ನು ಹತ್ತಲು ಮೆಟ್ಟಿಲುಗಳಿರುವುದರಿಂದ ಆರಾಮದಾಯಕ ಪಾದರಕ್ಷೆಗಳನ್ನು ಧರಿಸಿ. ಗುಹೆಗಳಿಂದ ಅಗಸ್ತ್ಯ ಸರೋವರದ ನೋಟವು ಅದ್ಭುತವಾಗಿದೆ, ವಿಶೇಷವಾಗಿ ಸೂರ್ಯೋದಯ ಅಥವಾ ಸೂರ್ಯಾಸ್ತದ ಸಮಯದಲ್ಲಿ."
    },
     {
      name: "ದುರ್ಗಾ ದೇವಸ್ಥಾನ, ಐಹೊಳೆ",
      history: "'ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು' ಎಂದು ಕರೆಯಲ್ಪಡುವ ಐಹೊಳೆಯ ದೊಡ್ಡ ದೇವಾಲಯ ಸಂಕೀರ್ಣದ ಭಾಗವಾಗಿರುವ ದುರ್ಗಾ ದೇವಾಲಯವು 7ನೇ ಅಥವಾ 8ನೇ ಶತಮಾನಕ್ಕೆ ಸೇರಿದೆ. ಇದರ ವಿಶಿಷ್ಟವಾದ ಅರ್ಧವೃತ್ತಾಕಾರದ ಆಕಾರವು ಬೌದ್ಧ ಚೈತ್ಯಾಲಯಗಳನ್ನು ಅನುಕರಿಸುತ್ತದೆ ಎಂದು ಭಾವಿಸಲಾಗಿದೆ. ಈ ದೇವಾಲಯವು ತನ್ನ ವಿಸ್ತಾರವಾದ ಕೆತ್ತನೆಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Durga_temple_Aihole_front_view.jpg/1280px-Durga_temple_Aihole_front_view.jpg",
      travel_tips: "ಐಹೊಳೆ, ಪಟ್ಟದಕಲ್ಲು ಮತ್ತು ಬಾದಾಮಿ ಜನಪ್ರಿಯ ಪ್ರವಾಸಿ ಸರ್ಕ್ಯೂಟ್ ಆಗಿದೆ. ಈ ಮೂರೂ ಐತಿಹಾಸಿಕ ಸ್ಥಳಗಳನ್ನು ಆರಾಮವಾಗಿ ನೋಡಲು ದಿನದ ಮಟ್ಟಿಗೆ ಒಂದೇ ಟ್ಯಾಕ್ಸಿಯನ್ನು ಬಾಡಿಗೆಗೆ ತೆಗೆದುಕೊಳ್ಳುವುದು ಉತ್ತಮ."
    }
  ]
};