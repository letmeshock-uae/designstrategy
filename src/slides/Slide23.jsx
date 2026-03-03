import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide23() {
    const { t } = useLanguage();

    const rules = [
        { icon: '🔒', text: t('slide23.rule1') },
        { icon: '📜', text: t('slide23.rule2') },
        { icon: '🏛', text: t('slide23.rule3') },
        { icon: '💧', text: t('slide23.rule4') },
        { icon: '👁', text: t('slide23.rule5') }
    ];

    return (
        <Slide slideNumber={23}>
            {/* Top/Bottom Layout: Header + Rules list */}
            <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide23.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide23.title1')} <span className="text-red-500">{t('slide23.title2')}</span> {t('slide23.title3')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: Rules list */}
                <div className="space-y-3 w-full">
                    {rules.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-xl p-4">
                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                            <p className="text-body-s text-grey-700">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
