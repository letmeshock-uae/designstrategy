import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide09() {
    const { t } = useLanguage();

    const afterItems = [
        { emoji: '📊', label: t('slide09.dashboards'), gradient: 'from-blue-100 to-blue-200', textColor: 'text-blue-700' },
        { emoji: '🤖', label: t('slide09.ai'), gradient: 'from-lime-100 to-lime-200', textColor: 'text-lime-700' },
        { emoji: '🌐', label: t('slide09.tours3d'), gradient: 'from-orange-100 to-orange-200', textColor: 'text-orange-700' }
    ];

    const techTags = [
        { label: t('slide09.vr'), colorClasses: 'bg-blue-50 text-blue-600' },
        { label: t('slide09.dgs'), colorClasses: 'bg-lime-50 text-lime-600' },
        { label: t('slide09.ml'), colorClasses: 'bg-orange-50 text-orange-600' },
        { label: t('slide09.analytics'), colorClasses: 'bg-green-50 text-green-600' }
    ];

    return (
        <Slide slideNumber={9}>
            {/* Top/Bottom Layout: Message on top, transformation visual below */}
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
                {/* TOP ZONE: Key message */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide09.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide09.title')}
                    </h1>
                    <p className="text-title-l text-grey-500 text-center">
                        {t('slide09.subtitle1')} <span className="text-lime-500 font-semibold">{t('slide09.tangible')}</span>.
                    </p>
                </div>

                {/* MIDDLE ZONE: Before → After visualization */}
                <div className="flex items-center justify-center gap-8">
                    {/* Before: Static */}
                    <div className="flex flex-col items-center opacity-50">
                        <div className="w-32 h-32 rounded-2xl bg-grey-100 flex flex-col items-center justify-center gap-2">
                            <span className="text-4xl">📋</span>
                            <span className="text-mono-xs text-grey-500">{t('slide09.static')}</span>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl text-lime-500">→</span>
                        <span className="text-mono-xs text-lime-600">{t('slide09.transform')}</span>
                    </div>

                    {/* After: Digital Stack */}
                    <div className="flex gap-4">
                        {afterItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center gap-1 shadow-md`}>
                                    <span className="text-2xl">{item.emoji}</span>
                                    <span className={`text-mono-xs ${item.textColor}`}>{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM ZONE: Tech tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    {techTags.map((tag, index) => (
                        <span key={index} className={`px-4 py-2 rounded-full text-mono-xs ${tag.colorClasses}`}>
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
