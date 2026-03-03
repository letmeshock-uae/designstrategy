import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide07() {
    const { t } = useLanguage();

    const regions = [
        { name: t('slide07.uae'), desc: t('slide07.uaeDesc'), emoji: '🇦🇪', gradient: 'from-blue-100 to-blue-200' },
        { name: t('slide07.saudi'), desc: t('slide07.saudiDesc'), emoji: '🇸🇦', gradient: 'from-lime-100 to-lime-200' }
    ];

    const partnerTypes = [
        { label: t('slide07.ministries'), colorClasses: 'bg-blue-50 border-blue-200 text-blue-700' },
        { label: t('slide07.partners'), colorClasses: 'bg-lime-50 border-lime-300 text-lime-700' },
        { label: t('slide07.investors'), colorClasses: 'bg-orange-50 border-orange-200 text-orange-700' }
    ];

    return (
        <Slide slideNumber={7}>
            {/* Top/Bottom Layout: Statement on top, visual elements below */}
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
                {/* TOP ZONE: Header & key message */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide07.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black leading-snug">
                        {t('slide07.title1')}<br />
                        {t('slide07.title2')}
                    </h1>
                </div>

                {/* MIDDLE ZONE: Regions visual */}
                <div className="flex items-center justify-center gap-16">
                    {regions.map((region, index) => (
                        <div key={index} className="flex flex-col items-center gap-3">
                            <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${region.gradient} flex items-center justify-center shadow-lg`}>
                                <span className="text-6xl">{region.emoji}</span>
                            </div>
                            <span className="text-body-m text-constant-black font-semibold">{region.name}</span>
                            <span className="text-mono-xs text-grey-500">{region.desc}</span>
                        </div>
                    ))}
                </div>

                {/* BOTTOM ZONE: Partner categories */}
                <div className="flex flex-wrap justify-center gap-4">
                    {partnerTypes.map((type, index) => (
                        <span
                            key={index}
                            className={`px-5 py-2.5 border rounded-full text-mono-xs ${type.colorClasses}`}
                        >
                            {type.label}
                        </span>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
