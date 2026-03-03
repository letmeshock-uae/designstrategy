import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide27() {
    const { t } = useLanguage();

    const quarters = [
        { q: t('slide27.q1'), title: t('slide27.q1Title'), items: [t('slide27.q1Item1'), t('slide27.q1Item2'), t('slide27.q1Item3')], color: 'lime' },
        { q: t('slide27.q2'), title: t('slide27.q2Title'), items: [t('slide27.q2Item1'), t('slide27.q2Item2'), t('slide27.q2Item3')], color: 'blue' },
        { q: t('slide27.q3'), title: t('slide27.q3Title'), items: [t('slide27.q3Item1'), t('slide27.q3Item2'), t('slide27.q3Item3'), t('slide27.q3Item4')], color: 'orange' },
        { q: t('slide27.q4'), title: t('slide27.q4Title'), items: [t('slide27.q4Item1'), t('slide27.q4Item2'), t('slide27.q4Item3')], color: 'green' }
    ];

    const colorClasses = {
        lime: { bg: 'bg-lime-50', border: 'border-lime-400', text: 'text-lime-600', badge: 'bg-lime-500' },
        blue: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-600', badge: 'bg-blue-500' },
        orange: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-600', badge: 'bg-orange-500' },
        green: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-600', badge: 'bg-green-500' }
    };

    return (
        <Slide slideNumber={27}>
            {/* Top/Bottom Layout with Timeline framework */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide27.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide27.title1')} <span className="text-lime-500">{t('slide27.title2')}</span>
                    </h1>
                </div>

                {/* BOTTOM ZONE: 4-column timeline */}
                <div className="grid grid-cols-4 gap-4 w-full">
                    {quarters.map((item, index) => (
                        <div key={index} className={`${colorClasses[item.color].bg} border-l-4 ${colorClasses[item.color].border} rounded-r-xl p-5`}>
                            <div className="flex items-center gap-2 mb-3">
                                <span className={`${colorClasses[item.color].badge} text-constant-white px-2 py-1 rounded text-mono-xs font-bold`}>
                                    {item.q}
                                </span>
                                <span className={`text-body-s font-bold ${colorClasses[item.color].text}`}>{item.title}</span>
                            </div>
                            <ul className="space-y-2">
                                {item.items.map((li, i) => (
                                    <li key={i} className="text-mono-xs text-grey-600 flex items-start gap-1">
                                        <span className={colorClasses[item.color].text}>•</span>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
