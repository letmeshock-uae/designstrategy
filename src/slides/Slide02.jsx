import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide02() {
    const { t } = useLanguage();

    const yearGoals = [
        t('slide02.goal1'),
        t('slide02.goal2'),
        t('slide02.goal3')
    ];

    return (
        <Slide slideNumber={2}>
            {/* Top/Bottom Layout: Header + Content */}
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide02.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide02.title1')} <span className="text-lime-500">{t('slide02.title2')}</span>
                    </h1>
                    <p className="text-title-l text-grey-500 text-center max-w-2xl">
                        {t('slide02.subtitle')}
                    </p>
                </div>

                {/* MIDDLE ZONE: Products */}
                <div className="grid grid-cols-3 gap-6 w-full">
                    {/* Teller */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                        <h2 className="text-title-l text-blue-600 font-bold mb-2">{t('slide02.teller')}</h2>
                        <p className="text-mono-xs text-grey-600">
                            {t('slide02.tellerDesc')}
                        </p>
                    </div>

                    {/* Axion */}
                    <div className="bg-lime-50 border border-lime-200 rounded-xl p-5 text-center">
                        <h2 className="text-title-l text-lime-600 font-bold mb-2">{t('slide02.axion')}</h2>
                        <p className="text-mono-xs text-grey-600">
                            {t('slide02.axionDesc')}
                        </p>
                    </div>

                    {/* Experiments */}
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
                        <h2 className="text-title-l text-orange-600 font-bold mb-2">{t('slide02.experiments')}</h2>
                        <p className="text-mono-xs text-grey-600">
                            {t('slide02.experimentsDesc')}
                        </p>
                    </div>
                </div>

                {/* BOTTOM ZONE: Year goals */}
                <div className="flex flex-col items-center gap-4 w-full">
                    <span className="text-mono-xs text-grey-400 tracking-widest uppercase">
                        {t('slide02.yearGoalsLabel')}
                    </span>
                    <ul className="flex flex-col items-center gap-2">
                        {yearGoals.map((goal, index) => (
                            <li key={index} className="flex items-center gap-2 text-body-m text-constant-black">
                                <span className="text-lime-500">•</span>
                                {goal}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Slide>
    );
}

