import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide21() {
    const { t } = useLanguage();

    const workflows = [
        { title: t('slide21.sceneOnboarding'), items: [t('slide21.sceneOnboardingItem1'), t('slide21.sceneOnboardingItem2')] },
        { title: t('slide21.pathPlanning'), items: [t('slide21.pathPlanningItem1'), t('slide21.pathPlanningItem2'), t('slide21.pathPlanningItem3')] },
        { title: t('slide21.annotations'), items: [t('slide21.annotationsItem1'), t('slide21.annotationsItem2'), t('slide21.annotationsItem3')] },
        { title: t('slide21.showreels'), items: [t('slide21.showreelsItem1'), t('slide21.showreelsItem2'), t('slide21.showreelsItem3')] },
        { title: t('slide21.docs'), items: [t('slide21.docsItem1'), t('slide21.docsItem2')] }
    ];

    return (
        <Slide slideNumber={21}>
            {/* Top/Bottom Layout: Header + Grid */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide21.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide21.title1')} <span className="text-orange-500">{t('slide21.title2')}</span>
                    </h1>
                </div>

                {/* BOTTOM ZONE: 5-column grid */}
                <div className="grid grid-cols-5 gap-3 w-full">
                    {workflows.map((item, index) => (
                        <div key={index} className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                            <h3 className="text-mono-xs font-bold text-orange-600 mb-3 text-center">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.items.map((li, i) => (
                                    <li key={i} className="text-mono-xs text-grey-600 flex items-start gap-1">
                                        <span className="text-orange-400">•</span>
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
