import React from 'react';
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CircleProgress from './CircleProgres';
import { StatisticData } from '../types';


export const Statistics = ({ statisticData }: { statisticData: StatisticData }) => {
    const infoList = [
        { label: "Доступно сейчас", value: statisticData.availableDays, color: "green" },
        { label: "Запланировано", value: statisticData.planed, color: "yellow" },
        { label: "Использовано/Недоступно", value: statisticData.unAvailableDays, color: "red" }
    ];
    return (
        <div style={{ minWidth: '360px' }} className="flex flex-col p-8 gap-4 bg-secondary rounded-lg flex-1 md:flex-none">
            <div className="flex gap-2">
                <p className="">Статистика</p>
                <Tooltip title="1 раб. месяц = 3 дня отпуска" arrow>
                    <InfoOutlinedIcon />
                </Tooltip>
            </div>
            <CircleProgress redVal={statisticData.unAvailableDays} yellowVal={statisticData.planed} greenVal={statisticData.availableDays} />
            <ul className="flex flex-col gap-2">
                {infoList.map((item, index) => (
                    <li key={index} style={{ padding: '12px 10px' }} className={`flex items-center justify-between border rounded-2xl border-primary text-${item.color}`}>
                        <div className="flex items-center">
                            <div style={{ color: item.color, fontWeight: 700 }}>·</div>
                            <div className="ml-1">{item.label}</div>
                        </div>
                        <div>{item.value} дня</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
