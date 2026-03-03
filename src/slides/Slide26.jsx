import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide26() {
    const { t } = useLanguage();

    const roles = [
        { role: t('slide26.aiChampion'), person: t('slide26.aiChampionPerson'), responsibility: t('slide26.aiChampionResp'), color: 'lime' },
        { role: t('slide26.promptLibrarian'), person: t('slide26.promptLibrarianPerson'), responsibility: t('slide26.promptLibrarianResp'), color: 'blue' },
        { role: t('slide26.reviewers'), person: t('slide26.reviewersPerson'), responsibility: t('slide26.reviewersResp'), color: 'orange' },
        { role: t('slide26.legalIT'), person: t('slide26.legalITPerson'), responsibility: t('slide26.legalITResp'), color: 'purple' }
    ];

    const colorClasses = {
        lime: { bg: 'bg-lime-500', light: 'bg-lime-50', border: 'border-lime-300' },
        blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-300' },
        orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-300' },
        purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-300' }
    };

    return (
        <Slide slideNumber={26}>
            {/* Top/Bottom Layout: Header + Roles grid */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide26.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide26.title1')} <span className="text-lime-500">{t('slide26.title2')}</span> {t('slide26.title3')} <span className="text-grey-400 text-title-l">{t('slide26.raci')}</span>
                    </h1>
                </div>

                {/* BOTTOM ZONE: 4-column roles grid */}
                <div className="grid grid-cols-4 gap-4 w-full">
                    {roles.map((item, index) => (
                        <div key={index} className={`${colorClasses[item.color].light} border ${colorClasses[item.color].border} rounded-xl p-5`}>
                            <div className={`w-10 h-10 ${colorClasses[item.color].bg} rounded-xl flex items-center justify-center mb-3`}>
                                <span className="text-constant-white font-bold text-mono-xs">{item.person}</span>
                            </div>
                            <h3 className="text-body-m font-bold text-constant-black mb-2">{item.role}</h3>
                            <p className="text-mono-xs text-grey-600">{item.responsibility}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
