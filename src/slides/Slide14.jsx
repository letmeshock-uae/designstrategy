import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide14() {
    const { t } = useLanguage();

    const quarters = [
        {
            quarter: t('slide14.q1'),
            name: t('slide14.q1Name'),
            focus: t('slide14.q1Focus'),
            outcomes: t('slide14.q1Outcomes'),
            color: 'lime'
        },
        {
            quarter: t('slide14.q2'),
            name: t('slide14.q2Name'),
            focus: t('slide14.q2Focus'),
            outcomes: t('slide14.q2Outcomes'),
            color: 'blue'
        },
        {
            quarter: t('slide14.q3'),
            name: t('slide14.q3Name'),
            focus: t('slide14.q3Focus'),
            outcomes: t('slide14.q3Outcomes'),
            color: 'orange'
        },
        {
            quarter: t('slide14.q4'),
            name: t('slide14.q4Name'),
            focus: t('slide14.q4Focus'),
            outcomes: t('slide14.q4Outcomes'),
            color: 'green'
        }
    ];

    const colorClasses = {
        lime: { bg: 'bg-lime-50', border: 'border-lime-400', text: 'text-lime-600' },
        blue: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-600' },
        orange: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-600' },
        green: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-600' }
    };

    return (
        <Slide slideNumber={14}>
            {/* Top/Bottom Layout with Timeline framework */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide14.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide14.title')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: Timeline table */}
                <div className="w-full">
                    {/* Table header */}
                    <div className="grid grid-cols-4 gap-4 mb-4 px-4">
                        <span className="text-mono-xs text-grey-400 uppercase">{t('slide14.quarter')}</span>
                        <span className="text-mono-xs text-grey-400 uppercase">{t('slide14.focus')}</span>
                        <span className="text-mono-xs text-grey-400 uppercase col-span-2">{t('slide14.outcomes')}</span>
                    </div>

                    {/* Table rows */}
                    <div className="space-y-3">
                        {quarters.map((q, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-4 gap-4 ${colorClasses[q.color].bg} rounded-xl p-4 border-l-4 ${colorClasses[q.color].border}`}
                            >
                                <div className="flex flex-col">
                                    <span className={`text-title-l font-bold ${colorClasses[q.color].text}`}>{q.quarter}</span>
                                    <span className="text-mono-xs text-grey-500">{q.name}</span>
                                </div>
                                <div className="text-body-s text-grey-700">{q.focus}</div>
                                <div className="col-span-2 text-body-s text-grey-700 font-medium">{q.outcomes}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
