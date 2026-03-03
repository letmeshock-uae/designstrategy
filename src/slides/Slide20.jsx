import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide20() {
    const { t } = useLanguage();

    const workflows = [
        { title: t('slide20.identity'), items: [t('slide20.identityItem1'), t('slide20.identityItem2'), t('slide20.identityItem3')] },
        { title: t('slide20.decks'), items: [t('slide20.decksItem1'), t('slide20.decksItem2'), t('slide20.decksItem3')] },
        { title: t('slide20.marketing'), items: [t('slide20.marketingItem1'), t('slide20.marketingItem2'), t('slide20.marketingItem3'), t('slide20.marketingItem4')] },
        { title: t('slide20.caseStudies'), items: [t('slide20.caseStudiesItem1'), t('slide20.caseStudiesItem2'), t('slide20.caseStudiesItem3')] }
    ];

    return (
        <Slide slideNumber={20}>
            {/* Top/Bottom Layout: Header + Grid */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide20.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide20.title1')} <span className="text-lime-500">{t('slide20.title2')}</span>
                    </h1>
                </div>

                {/* BOTTOM ZONE: 4-column grid */}
                <div className="grid grid-cols-4 gap-4 w-full">
                    {workflows.map((item, index) => (
                        <div key={index} className="bg-lime-50 border border-lime-200 rounded-xl p-5">
                            <h3 className="text-mono-xs font-bold text-lime-600 mb-3 text-center">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.items.map((li, i) => (
                                    <li key={i} className="text-mono-xs text-grey-600 flex items-start gap-1">
                                        <span className="text-lime-400">•</span>
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
