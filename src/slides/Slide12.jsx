import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide12() {
    const { t } = useLanguage();

    const productGoals = [
        t('slide12.productGoal1'),
        t('slide12.productGoal2'),
        t('slide12.productGoal3'),
        t('slide12.productGoal4'),
        t('slide12.productGoal5')
    ];

    const brandGoals = [
        t('slide12.brandGoal1'),
        t('slide12.brandGoal2'),
        t('slide12.brandGoal3')
    ];

    return (
        <Slide slideNumber={12}>
            {/* Top/Bottom + Left/Right Combo: Title on top, two columns below */}
            <div className="flex flex-col items-center gap-10 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide12.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide12.title')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: Two-column grid */}
                <div className="grid grid-cols-2 gap-8 w-full">
                    {/* Product Column */}
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-constant-white text-body-s font-bold">P</span>
                            <h2 className="text-title-l text-blue-600 font-bold">{t('slide12.product')}</h2>
                        </div>
                        <ul className="space-y-3">
                            {productGoals.map((goal, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5">•</span>
                                    <span className="text-body-s text-grey-700">{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brand Column */}
                    <div className="bg-lime-50 rounded-2xl p-6 border border-lime-200">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center text-constant-white text-body-s font-bold">B</span>
                            <h2 className="text-title-l text-lime-600 font-bold">{t('slide12.brand')}</h2>
                        </div>
                        <ul className="space-y-3">
                            {brandGoals.map((goal, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-lime-400 mt-0.5">•</span>
                                    <span className="text-body-s text-grey-700">{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
