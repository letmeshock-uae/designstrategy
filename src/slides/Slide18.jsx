import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide18() {
    const { t } = useLanguage();

    const tools = [
        { category: t('slide18.ideation'), desc: t('slide18.ideationDesc'), color: 'blue' },
        { category: t('slide18.visuals'), desc: t('slide18.visualsDesc'), color: 'purple' },
        { category: t('slide18.productUI'), desc: t('slide18.productUIDesc'), color: 'lime' },
        { category: t('slide18.dgsSupport'), desc: t('slide18.dgsSupportDesc'), color: 'orange' },
        { category: t('slide18.qaLabel'), desc: t('slide18.qaDesc'), color: 'green' }
    ];

    const colorClasses = {
        blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300' },
        lime: { bg: 'bg-lime-100', text: 'text-lime-600', border: 'border-lime-300' },
        orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-300' },
        green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300' }
    };

    return (
        <Slide slideNumber={18}>
            {/* Top/Bottom Layout: Header + Grid */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide18.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide18.title')}
                    </h1>
                    <p className="text-title-l text-lime-500 text-center font-semibold">
                        {t('slide18.subtitle')}
                    </p>
                </div>

                {/* MIDDLE ZONE: 5-column grid */}
                <div className="grid grid-cols-5 gap-3 w-full">
                    {tools.map((item, index) => (
                        <div key={index} className={`${colorClasses[item.color].bg} border ${colorClasses[item.color].border} rounded-xl p-4 text-center`}>
                            <h3 className={`text-mono-xs font-bold ${colorClasses[item.color].text} mb-2`}>{item.category}</h3>
                            <p className="text-mono-xs text-grey-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* BOTTOM ZONE: Footnote */}
                <p className="text-mono-xs text-grey-400 italic">
                    {t('slide18.footnote')}
                </p>
            </div>
        </Slide>
    );
}
