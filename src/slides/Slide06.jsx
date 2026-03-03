import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide06() {
    const { t } = useLanguage();

    return (
        <Slide slideNumber={6}>
            {/* Centre Layout: Key statement with strong typographic emphasis */}
            <div className="flex flex-col items-center justify-center gap-10">
                {/* Tertiary: Section label */}
                <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                    {t('slide06.label')}
                </span>

                {/* Primary: Main statement - maximum clarity */}
                <h1 className="text-display-64 text-center text-constant-black leading-snug max-w-4xl">
                    {t('slide06.title1')}<br />
                    {t('slide06.title2')} <span className="text-lime-500">{t('slide06.interaction')}</span>,<br />
                    {t('slide06.title3')} <span className="text-blue-500">{t('slide06.impression')}</span>.
                </h1>

                {/* Secondary: Supporting context */}
                <p className="text-body-m text-grey-500 text-center max-w-xl">
                    {t('slide06.subtitle')}
                </p>
            </div>
        </Slide>
    );
}
