import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide17() {
    const { t } = useLanguage();

    const principles = [
        { icon: '◈', title: t('slide17.principle1Title'), desc: t('slide17.principle1Desc'), color: 'lime' },
        { icon: '👁', title: t('slide17.principle2Title'), desc: t('slide17.principle2Desc'), color: 'blue' },
        { icon: '📚', title: t('slide17.principle3Title'), desc: t('slide17.principle3Desc'), color: 'orange' },
        { icon: '🌐', title: t('slide17.principle4Title'), desc: t('slide17.principle4Desc'), color: 'purple' }
    ];

    const colorClasses = {
        lime: 'bg-lime-500',
        blue: 'bg-blue-500',
        orange: 'bg-orange-500',
        purple: 'bg-purple-500'
    };

    return (
        <Slide slideNumber={17}>
            {/* Top/Bottom + Grid Combo Layout */}
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide17.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide17.title')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: 2x2 Grid of principles */}
                <div className="grid grid-cols-2 gap-6 w-full">
                    {principles.map((item, index) => (
                        <div key={index} className="bg-grey-50 rounded-2xl p-6 border border-grey-200">
                            <div className={`w-12 h-12 ${colorClasses[item.color]} rounded-xl flex items-center justify-center mb-4`}>
                                <span className="text-constant-white text-xl">{item.icon}</span>
                            </div>
                            <h3 className="text-body-m font-bold text-constant-black mb-2">{item.title}</h3>
                            <p className="text-mono-xs text-grey-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
