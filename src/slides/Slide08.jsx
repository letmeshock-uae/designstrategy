import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide08() {
    const { t } = useLanguage();

    const regions = [
        { flag: '🇦🇪', name: 'UAE', vision: 'Vision 2031', progress: 80 },
        { flag: '🇸🇦', name: 'Saudi', vision: 'Vision 2030', progress: 75 }
    ];

    const initiatives = [
        { label: t('slide08.neom'), accent: false },
        { label: t('slide08.smartDubai'), accent: false },
        { label: t('slide08.aiStrategy'), accent: false },
        { label: t('slide08.digitalGov'), accent: false },
        { label: t('slide08.tours3d'), accent: true }
    ];

    return (
        <Slide slideNumber={8}>
            {/* Top/Bottom Layout: Message on top, data visualization below */}
            <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
                {/* TOP ZONE: Key message */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide08.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black leading-snug max-w-3xl">
                        {t('slide08.title1')} <span className="text-lime-500">{t('slide08.lead')}</span>.
                    </h1>
                </div>

                {/* MIDDLE ZONE: Progress visualization (Dashboard framework) */}
                <div className="w-full space-y-5">
                    {regions.map((region, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="w-24 text-right">
                                <span className="text-mono-xs text-grey-600">{region.flag} {region.name}</span>
                            </div>
                            <div className="flex-1 h-3 bg-grey-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-400 to-lime-400 rounded-full transition-all"
                                    style={{ width: `${region.progress}%` }}
                                />
                            </div>
                            <span className="text-mono-xs text-lime-600 font-semibold w-24">{region.vision}</span>
                        </div>
                    ))}
                </div>

                {/* BOTTOM ZONE: Initiative tags */}
                <div className="flex flex-wrap justify-center gap-3">
                    {initiatives.map((item, index) => (
                        <span
                            key={index}
                            className={`px-4 py-2 rounded-full text-mono-xs ${item.accent
                                ? 'bg-lime-100 text-lime-700'
                                : 'bg-grey-100 text-grey-700'
                                }`}
                        >
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
