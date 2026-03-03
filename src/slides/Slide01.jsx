import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide01() {
    const { t } = useLanguage();

    return (
        <Slide slideNumber={1}>
            {/* Centre Layout: Key message with maximum clarity */}
            <div className="flex flex-col items-center justify-center gap-8">
                {/* Tertiary: Date label */}
                <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                    {t('slide01.date')}
                </span>

                {/* Primary: Main headline - most visually dominant */}
                <h1 className="text-display-96 text-center text-constant-black leading-tight">
                    {t('slide01.title1')}<br />
                    <span className="text-lime-500">{t('slide01.title2')}</span>
                </h1>

                {/* Secondary: Supporting text - subordinate to main message */}
                <p className="text-body-m text-grey-500 text-center max-w-xl">
                    {t('slide01.subtitle')}
                </p>
            </div>
        </Slide>
    );
}
