import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide05() {
    const { t } = useLanguage();

    const values = [
        { label: t('slide05.clarity'), color: 'lime', bgColor: 'bg-lime-100', textColor: 'text-lime-600' },
        { label: t('slide05.trust'), color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
        { label: t('slide05.value'), color: 'orange', bgColor: 'bg-orange-100', textColor: 'text-orange-500' }
    ];

    return (
        <Slide slideNumber={5}>
            {/* Centre Layout: One core idea with supporting visuals */}
            <div className="flex flex-col items-center justify-center gap-10">
                {/* Primary: Main message */}
                <h1 className="text-display-64 text-center text-constant-black">
                    {t('slide05.title')}
                </h1>

                {/* Secondary: Supporting explanation */}
                <p className="text-title-l text-grey-500 text-center max-w-2xl">
                    {t('slide05.subtitle')}
                </p>

                {/* Visual: Supporting icons - subordinate to text */}
                <div className="flex items-center gap-16 mt-4">
                    {values.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-3">
                            <div className={`w-20 h-20 rounded-full ${item.bgColor} flex items-center justify-center`}>
                                <span className={`text-4xl ${item.textColor}`}>✦</span>
                            </div>
                            <span className="text-mono-xs text-grey-500 uppercase tracking-wider">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
