import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide11() {
    const { t } = useLanguage();

    const principles = [
        { title: t('slide11.principle1Title'), desc: t('slide11.principle1Desc'), color: 'lime' },
        { title: t('slide11.principle2Title'), desc: t('slide11.principle2Desc'), color: 'blue' },
        { title: t('slide11.principle3Title'), desc: t('slide11.principle3Desc'), color: 'orange' },
        { title: t('slide11.principle4Title'), desc: t('slide11.principle4Desc'), color: 'green' }
    ];

    const colorClasses = {
        lime: { bg: 'bg-lime-50', border: 'border-lime-400', text: 'text-lime-600' },
        blue: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-600' },
        orange: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-600' },
        green: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-600' }
    };

    return (
        <Slide slideNumber={11}>
            {/* Top/Bottom Layout: Vision message on top, principles below */}
            <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
                {/* TOP ZONE: Vision statement */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide11.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide11.title')}
                    </h1>
                    <p className="text-title-l text-grey-500 text-center max-w-2xl">
                        {t('slide11.subtitle1')}{' '}
                        <span className="text-lime-500 font-semibold">{t('slide11.clear')}</span>,{' '}
                        <span className="text-blue-500 font-semibold">{t('slide11.desirable')}</span>, {t('slide11.subtitle2')}{' '}
                        <span className="text-orange-500 font-semibold">{t('slide11.investIn')}</span>.
                    </p>
                    <p className="text-body-s text-grey-400 text-center max-w-2xl italic">
                        {t('slide11.quote')}
                    </p>
                </div>

                {/* BOTTOM ZONE: 2x2 Grid of principles */}
                <div className="w-full">
                    <span className="text-mono-xs text-grey-400 tracking-widest uppercase block text-center mb-4">
                        {t('slide11.principlesLabel')}
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                        {principles.map((item, index) => (
                            <div key={index} className={`px-5 py-4 ${colorClasses[item.color].bg} border-l-4 ${colorClasses[item.color].border} rounded-r-lg`}>
                                <span className={`text-body-s font-semibold ${colorClasses[item.color].text}`}>{item.title}</span>
                                <p className="text-mono-xs text-grey-500 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
