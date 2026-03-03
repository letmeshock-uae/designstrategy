import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide28() {
    const { t } = useLanguage();

    return (
        <Slide slideNumber={28} bgColor="bg-lime-400" textColor="text-constant-black">
            {/* Centre Layout: Emotional closing with strong emphasis */}
            <div className="flex flex-col items-center justify-center gap-8">
                {/* Primary: Main closing statement */}
                <h1 className="text-display-96 text-center text-constant-black leading-tight">
                    {t('slide28.title1')}<br />{t('slide28.title2')}
                </h1>

                {/* Secondary: Value proposition */}
                <p className="text-title-l text-constant-black text-center max-w-2xl opacity-80">
                    {t('slide28.subtitle1')}{' '}
                    <strong>{t('slide28.confidence')}</strong>, <strong>{t('slide28.clarity')}</strong>, {' '}
                    <strong>{t('slide28.credibility')}</strong>.
                </p>

                {/* Accent: Quote callout */}
                <div className="bg-constant-black rounded-2xl px-8 py-5 mt-4">
                    <p className="text-body-m text-constant-white text-center italic">
                        {t('slide28.quote')}
                    </p>
                </div>

                {/* Tertiary: Footer */}
                <span className="text-mono-xs text-constant-black opacity-50 mt-4">
                    {t('slide28.footer')}
                </span>
            </div>
        </Slide>
    );
}
