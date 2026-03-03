import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide25() {
    const { t } = useLanguage();

    const kpis = [
        { metric: t('slide25.throughput'), value: t('slide25.throughputValue'), desc: t('slide25.throughputDesc'), color: 'lime' },
        { metric: t('slide25.cycleTime'), value: t('slide25.cycleTimeValue'), desc: t('slide25.cycleTimeDesc'), color: 'blue' },
        { metric: t('slide25.quality'), value: t('slide25.qualityValue'), desc: t('slide25.qualityDesc'), color: 'green' },
        { metric: t('slide25.adoption'), value: t('slide25.adoptionValue'), desc: t('slide25.adoptionDesc'), color: 'orange' },
        { metric: t('slide25.libraryHealth'), value: t('slide25.libraryHealthValue'), desc: t('slide25.libraryHealthDesc'), color: 'purple' }
    ];

    const colorClasses = {
        lime: 'text-lime-500',
        blue: 'text-blue-500',
        green: 'text-green-500',
        orange: 'text-orange-500',
        purple: 'text-purple-500'
    };

    return (
        <Slide slideNumber={25}>
            {/* Top/Bottom Layout: Header + KPI grid */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide25.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide25.title1')} <span className="text-lime-500">{t('slide25.title2')}</span> {t('slide25.title3')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: 5-column KPI grid */}
                <div className="grid grid-cols-5 gap-4 w-full">
                    {kpis.map((item, index) => (
                        <div key={index} className="bg-grey-50 border border-grey-200 rounded-xl p-5 text-center">
                            <div className={`text-display-48 font-bold ${colorClasses[item.color]} mb-2`}>{item.value}</div>
                            <h3 className="text-body-s font-bold text-constant-black mb-1">{item.metric}</h3>
                            <p className="text-mono-xs text-grey-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
