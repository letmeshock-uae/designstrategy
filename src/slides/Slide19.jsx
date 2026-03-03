import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide19() {
    const { t } = useLanguage();

    const workflows = [
        { title: t('slide19.exploration'), items: [t('slide19.explorationItem1'), t('slide19.explorationItem2')] },
        { title: t('slide19.components'), items: [t('slide19.componentsItem1'), t('slide19.componentsItem2'), t('slide19.componentsItem3')] },
        { title: t('slide19.microcopy'), items: [t('slide19.microcopyItem1'), t('slide19.microcopyItem2'), t('slide19.microcopyItem3')] },
        { title: t('slide19.devHandoff'), items: [t('slide19.devHandoffItem1'), t('slide19.devHandoffItem2')] },
        { title: t('slide19.accessibility'), items: [t('slide19.accessibilityItem1'), t('slide19.accessibilityItem2'), t('slide19.accessibilityItem3')] }
    ];

    return (
        <Slide slideNumber={19}>
            {/* Top/Bottom Layout: Header + Grid */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide19.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide19.title1')} <span className="text-blue-500">{t('slide19.title2')}</span>
                    </h1>
                </div>

                {/* BOTTOM ZONE: 5-column grid */}
                <div className="grid grid-cols-5 gap-3 w-full">
                    {workflows.map((item, index) => (
                        <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <h3 className="text-mono-xs font-bold text-blue-600 mb-3 text-center">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.items.map((li, i) => (
                                    <li key={i} className="text-mono-xs text-grey-600 flex items-start gap-1">
                                        <span className="text-blue-400">•</span>
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
