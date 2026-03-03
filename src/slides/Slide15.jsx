import React from 'react';
import Slide from '../components/Slide';
import { useLanguage } from '../components/LanguageContext';

export default function Slide15() {
    const { t } = useLanguage();

    const kpis = [
        { area: t('slide15.productArea'), kpi: t('slide15.productKpi'), target: t('slide15.productTarget'), color: 'blue' },
        { area: t('slide15.dsArea'), kpi: t('slide15.dsKpi'), target: t('slide15.dsTarget'), color: 'purple' },
        { area: t('slide15.brandArea'), kpi: t('slide15.brandKpi'), target: t('slide15.brandTarget'), color: 'lime' },
        { area: t('slide15.salesArea'), kpi: t('slide15.salesKpi'), target: t('slide15.salesTarget'), color: 'orange' },
        { area: t('slide15.processArea'), kpi: t('slide15.processKpi'), target: t('slide15.processTarget'), color: 'green' }
    ];

    const colorClasses = {
        blue: { bg: 'bg-blue-500', text: 'text-blue-600' },
        purple: { bg: 'bg-purple-500', text: 'text-purple-600' },
        lime: { bg: 'bg-lime-500', text: 'text-lime-600' },
        orange: { bg: 'bg-orange-500', text: 'text-orange-600' },
        green: { bg: 'bg-green-500', text: 'text-green-600' }
    };

    return (
        <Slide slideNumber={15}>
            {/* Top/Bottom Layout: Header + KPI table */}
            <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
                {/* TOP ZONE: Header */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-mono-xs text-grey-500 tracking-widest uppercase">
                        {t('slide15.label')}
                    </span>
                    <h1 className="text-display-64 text-center text-constant-black">
                        {t('slide15.title1')} <span className="text-lime-500">{t('slide15.title2')}</span> {t('slide15.title3')}
                    </h1>
                </div>

                {/* BOTTOM ZONE: KPI Table */}
                <div className="w-full">
                    {/* Header */}
                    <div className="grid grid-cols-3 gap-4 mb-4 pb-3 border-b border-grey-200">
                        <span className="text-mono-xs text-grey-400 uppercase font-semibold">{t('slide15.area')}</span>
                        <span className="text-mono-xs text-grey-400 uppercase font-semibold">{t('slide15.kpi')}</span>
                        <span className="text-mono-xs text-grey-400 uppercase font-semibold">{t('slide15.target')}</span>
                    </div>

                    {/* Rows */}
                    <div className="space-y-2">
                        {kpis.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 gap-4 py-3 border-b border-grey-100 items-center"
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`w-3 h-3 rounded-full ${colorClasses[item.color].bg}`}></span>
                                    <span className="text-body-s text-constant-black font-medium">{item.area}</span>
                                </div>
                                <div className="text-body-s text-grey-600">{item.kpi}</div>
                                <div className={`text-body-s font-bold ${colorClasses[item.color].text}`}>{item.target}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
