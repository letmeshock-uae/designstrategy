import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide16() {
    const { t } = useLanguage();

    const risks = [
        { risk: t('slide16.risk1'), mitigation: t('slide16.mitigation1') },
        { risk: t('slide16.risk2'), mitigation: t('slide16.mitigation2') },
        { risk: t('slide16.risk3'), mitigation: t('slide16.mitigation3') },
        { risk: t('slide16.risk4'), mitigation: t('slide16.mitigation4') }
    ];

    return (
        <Slide slideNumber={16}>
            {/* Top/Bottom Layout: Header + Risk table */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide16.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide16.title1')} <span className="text-red-500">{t('slide16.title2')}</span> {t('slide16.title3')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: Risk Table */}
                <div className="w-full">
                    {/* Header */}
                    <div className="grid grid-cols-2 gap-6 mb-4 pb-3 border-b border-grey-200">
                        <span className="text-mono-xs text-red-500 uppercase font-semibold">{t('slide16.riskHeader')}</span>
                        <span className="text-mono-xs text-lime-500 uppercase font-semibold">{t('slide16.mitigationHeader')}</span>
                    </div>

                    {/* Rows */}
                    <div className="space-y-3">
                        {risks.map((item, index) => (
                            <div key={index} className="grid grid-cols-2 gap-6 py-3 border-b border-grey-100">
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-mono-xs font-bold flex-shrink-0">
                                        {index + 1}
                                    </span>
                                    <span className="text-body-s text-grey-700">{item.risk}</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-lime-100 rounded-full flex items-center justify-center text-lime-600 text-mono-xs flex-shrink-0">
                                        →
                                    </span>
                                    <span className="text-body-s text-grey-700">{item.mitigation}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
