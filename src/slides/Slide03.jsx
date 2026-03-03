import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide03() {
    const { t } = useLanguage();

    const goals = [
        t('slide03.goal1'),
        t('slide03.goal2'),
        t('slide03.goal3')
    ];

    return (
        <Slide slideNumber={3}>
            {/* Top/Bottom Layout: Title zone + Content zone */}
            <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl">
                {/* TOP ZONE: Product introduction */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide03.label')}
                    </span>
                    <h1 className="text-display-96 text-center text-constant-black">
                        <span className="text-blue-500">{t('slide03.title')}</span>
                    </h1>
                    <p className="text-title-l text-grey-500 text-center max-w-2xl">
                        {t('slide03.subtitle')}
                    </p>
                </div>

                {/* BOTTOM ZONE: Goals section */}
                <div className="flex flex-col items-center gap-4 w-full">
                    <span className="text-mono-xs text-grey-400 tracking-widest uppercase">
                        {t('slide03.goalsLabel')}
                    </span>
                    <div className="flex flex-wrap justify-center gap-4">
                        {goals.map((goal, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-body-s text-blue-700"
                            >
                                {goal}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
