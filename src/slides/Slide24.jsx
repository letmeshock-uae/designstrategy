import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide24() {
    const { t } = useLanguage();

    const items = [
        { title: t('slide24.acceptance'), desc: t('slide24.acceptanceDesc'), icon: '✓', color: 'lime' },
        { title: t('slide24.twoPass'), desc: t('slide24.twoPassDesc'), icon: '👁', color: 'blue' },
        { title: t('slide24.redFlags'), desc: t('slide24.redFlagsDesc'), icon: '⚠', color: 'red' },
        { title: t('slide24.designQA'), desc: t('slide24.designQADesc'), icon: '🚪', color: 'purple' }
    ];

    const colorClasses = {
        lime: { bg: 'bg-lime-50', border: 'border-lime-300', icon: 'bg-lime-500' },
        blue: { bg: 'bg-blue-50', border: 'border-blue-300', icon: 'bg-blue-500' },
        red: { bg: 'bg-red-50', border: 'border-red-300', icon: 'bg-red-500' },
        purple: { bg: 'bg-purple-50', border: 'border-purple-300', icon: 'bg-purple-500' }
    };

    return (
        <Slide slideNumber={24}>
            {/* Top/Bottom + 2x2 Grid Layout */}
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide24.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide24.title1')} <span className="text-lime-500">{t('slide24.title2')}</span> {t('slide24.title3')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: 2x2 Grid */}
                <div className="grid grid-cols-2 gap-6 w-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`${colorClasses[item.color].bg} border ${colorClasses[item.color].border} rounded-xl p-5 flex items-start gap-4`}
                        >
                            <div className={`w-10 h-10 ${colorClasses[item.color].icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <span className="text-constant-white text-lg">{item.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-body-m font-bold text-constant-black mb-1">{item.title}</h3>
                                <p className="text-mono-xs text-grey-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
