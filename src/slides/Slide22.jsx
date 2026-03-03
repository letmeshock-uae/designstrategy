import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide22() {
    const { t } = useLanguage();

    const items = [
        { title: t('slide22.promptCards'), desc: t('slide22.promptCardsDesc'), icon: '📋' },
        { title: t('slide22.templates'), desc: t('slide22.templatesDesc'), icon: '🔗' },
        { title: t('slide22.variables'), desc: t('slide22.variablesDesc'), icon: '{ }' },
        { title: t('slide22.macros'), desc: t('slide22.macrosDesc'), icon: '⚡' },
        { title: t('slide22.versioning'), desc: t('slide22.versioningDesc'), icon: '📦' }
    ];

    return (
        <Slide slideNumber={22}>
            {/* Top/Bottom Layout: Header + Grid */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide22.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide22.title1')} <span className="text-purple-500">{t('slide22.title2')}</span> {t('slide22.title3')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: 5-column grid */}
                <div className="grid grid-cols-5 gap-3 w-full">
                    {items.map((item, index) => (
                        <div key={index} className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <h3 className="text-mono-xs font-bold text-purple-600 mb-2">{item.title}</h3>
                            <p className="text-mono-xs text-grey-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
