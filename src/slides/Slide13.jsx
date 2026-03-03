import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide13() {
    const { t } = useLanguage();

    const systems = [
        { icon: '◈', title: t('slide13.figma'), desc: t('slide13.figmaDesc'), color: 'bg-purple-500' },
        { icon: '⚡', title: t('slide13.workflows'), desc: t('slide13.workflowsDesc'), color: 'bg-blue-500' },
        { icon: '✓', title: t('slide13.qa'), desc: t('slide13.qaDesc'), color: 'bg-lime-500' }
    ];

    const rituals = [
        { day: 'MON', name: t('slide13.mondayBrew'), type: t('slide13.kickoff'), colorClasses: 'bg-orange-50 border-orange-200 text-orange-600' },
        { day: 'WED', name: t('slide13.midweekReview'), type: t('slide13.alignment'), colorClasses: 'bg-blue-50 border-blue-200 text-blue-600' },
        { day: 'FRI', name: t('slide13.fridayWrap'), type: t('slide13.showLearn'), colorClasses: 'bg-lime-50 border-lime-200 text-lime-600' }
    ];

    return (
        <Slide slideNumber={13}>
            {/* Top/Bottom Layout: Header + Systems grid + Rituals */}
            <div className="flex flex-col items-center gap-10 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide13.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide13.title')}
                    </h1>
                </div>

                {/* MIDDLE ZONE: 3-column systems grid */}
                <div className="grid grid-cols-3 gap-6 w-full">
                    {systems.map((item, index) => (
                        <div key={index} className="bg-grey-50 rounded-2xl p-5 border border-grey-200">
                            <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                                <span className="text-constant-white text-lg">{item.icon}</span>
                            </div>
                            <h3 className="text-body-m font-bold text-constant-black mb-2">{item.title}</h3>
                            <p className="text-mono-xs text-grey-500">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* BOTTOM ZONE: Design rituals */}
                <div className="w-full">
                    <span className="text-mono-xs text-grey-400 tracking-widest uppercase block text-center mb-4">
                        {t('slide13.ritualsLabel')}
                    </span>
                    <div className="flex justify-center gap-6">
                        {rituals.map((ritual, index) => (
                            <div key={index} className={`px-6 py-4 ${ritual.colorClasses} border rounded-xl text-center`}>
                                <span className={`text-mono-xs font-bold`}>{ritual.day}</span>
                                <p className="text-body-s text-grey-700 mt-1">{ritual.name}</p>
                                <p className="text-mono-xs text-grey-400">{ritual.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
