import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide10() {
    const { t } = useLanguage();

    const teamMembers = [
        {
            name: t('slide10.designLead'),
            photo: '/team/communication-designer.png',
            role: t('slide10.designLeadRole'),
            goal: t('slide10.designLeadGoal')
        },
        {
            name: t('slide10.commDesigner'),
            photo: '/team/product-designer.png',
            role: t('slide10.commDesignerRole'),
            goal: t('slide10.commDesignerGoal')
        },
        {
            name: t('slide10.productDesigner'),
            photo: '/team/ai-assistant.png',
            role: t('slide10.productDesignerRole'),
            goal: t('slide10.productDesignerGoal')
        },
        {
            name: t('slide10.aiAssistant'),
            photo: '/team/design-lead.png',
            role: t('slide10.aiAssistantRole'),
            goal: t('slide10.aiAssistantGoal')
        }
    ];


    return (
        <Slide slideNumber={10}>
            {/* Top/Bottom + Grid Layout */}
            <div className="flex flex-col items-center gap-10 w-full max-w-6xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide10.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide10.title1')} <span className="text-lime-500">{t('slide10.title2')}</span> {t('slide10.title3')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: 4-column team grid */}
                <div className="grid grid-cols-4 gap-6 w-full items-start">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center h-full">
                            {/* Photo */}
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-grey-200 mb-4">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <span className="text-body-m text-constant-black font-semibold mb-3">
                                {member.name}
                            </span>

                            {/* Role - fixed height to align goals */}
                            <div className="min-h-[5rem] mb-3">
                                <span className="text-mono-xs text-grey-400 uppercase">{t('slide10.roleLabel')}</span>
                                <p className="text-mono-xs text-grey-600">{member.role}</p>
                            </div>

                            {/* 2026 Goal - now aligned */}
                            <div className="mt-auto">
                                <span className="text-mono-xs text-grey-400 uppercase">{t('slide10.goalLabel')}</span>
                                <p className="text-mono-xs text-lime-600">{member.goal}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
