import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide04() {
    const { t } = useLanguage();

    const goals = [
        t('slide04.goal1'),
        t('slide04.goal2'),
        t('slide04.goal3')
    ];

    return (
        <Slide slideNumber={4}>
            {/* Top/Bottom Layout: Title zone + Content zone */}
            <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl">
                {/* TOP ZONE: Product introduction */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide04.label')}
                    </span>
                    <h1 className="text-display-96 text-center text-constant-black">
                        <span className="text-lime-500">{t('slide04.title')}</span>
                    </h1>
                    <p className="text-title-l text-grey-500 text-center max-w-2xl">
                        {t('slide04.subtitle')}
                    </p>
                </div>

                {/* BOTTOM ZONE: Goals section */}
                <div className="flex flex-col items-center gap-4 w-full">
                    <span className="text-mono-xs text-grey-400 tracking-widest uppercase">
                        {t('slide04.goalsLabel')}
                    </span>
                    <div className="flex flex-wrap justify-center gap-4">
                        {goals.map((goal, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 bg-lime-50 border border-lime-300 rounded-full text-body-s text-lime-700"
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
