import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import LanguageToggle from './LanguageToggle';

interface LandingScreenProps {
  onExplore: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onExplore, language, setLanguage }) => {
  const text = UI_TEXT[language];

  return (
    <div className="flex flex-col h-full text-white">
      <header className="flex items-center justify-end p-4">
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className={`text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
          {text.landingTitle}
        </h1>
        <p className={`text-lg md:text-2xl mb-8 drop-shadow-md ${language === 'kn' ? 'font-kannada' : ''}`}>
          {text.landingSubtitle}
        </p>
        <button
          onClick={onExplore}
          className={`px-8 py-4 bg-white text-red-600 font-bold text-xl rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300 ${language === 'kn' ? 'font-kannada' : ''}`}
        >
          {text.exploreButton}
        </button>
      </main>
      <footer className="h-16"></footer>
    </div>
  );
};

export default LandingScreen;