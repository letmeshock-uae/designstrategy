import React from 'react';
import { useLanguage } from './LanguageContext';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-6 left-20 z-40 px-3 py-2 rounded-full bg-grey-100 dark:bg-grey-800 hover:bg-grey-200 dark:hover:bg-grey-700 shadow-lg transition-all duration-300 print:hidden"
            aria-label={language === 'en' ? 'Switch to Russian' : 'Switch to English'}
        >
            <span className="text-mono-xs font-bold text-grey-700 dark:text-grey-300">
                {language === 'en' ? 'RU' : 'EN'}
            </span>
        </button>
    );
}
