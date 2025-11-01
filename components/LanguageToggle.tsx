
import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  const baseClasses = "px-4 py-2 text-sm font-bold transition-colors duration-200";
  const activeClasses = "bg-white text-red-600 shadow-md";
  const inactiveClasses = "bg-transparent text-white hover:bg-white/20";

  return (
    <div className="flex rounded-full bg-black/20 p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`${baseClasses} rounded-l-full ${language === 'en' ? activeClasses : inactiveClasses}`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('kn')}
        className={`${baseClasses} rounded-r-full font-kannada ${language === 'kn' ? activeClasses : inactiveClasses}`}
      >
        ಕ
      </button>
    </div>
  );
};

export default LanguageToggle;
