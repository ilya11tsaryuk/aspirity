import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LeaveRow } from '../types';

export const LeaveHistory = ({ rows }: { rows: LeaveRow[] }) => {
    return (
        <div className="bg-secondary rounded-lg flex flex-col gap-4 p-7 flex-1">
            <div className="flex justify-between">
                <p className="">История отпусков</p>
                <button className="back-button p-0">Посмотреть все</button>
            </div>
            <div className="flex flex-col">
                {rows.map((row, ind) => (
                    <div key={row.id} className="flex flex-wrap flex-col sm:flex-row">
                        <div className="flex-1 flex items-start flex-col gap-2">
                            <div className={`sm:px-2 sm:py-4 text-base text-tertiary block ${ind && 'sm:hidden'}`}>Тип</div>
                            <div className="sm:px-2 sm:py-4">{row.type}</div>
                        </div>
                        <div className="flex-1 flex items-start flex-col gap-2 min-w-72">
                            <div className={`sm:px-2 sm:py-4 text-base text-tertiary block ${ind && 'sm:hidden'}`}>Даты отпуска</div>
                            <div className="sm:px-2 sm:py-4">{row.date[0]} <ArrowRightAltIcon sx={{ color: `${row.type === 'Отпуск' ? 'yellow' : 'red'}` }} /> {row.date[1]}</div>
                        </div>
                        <div className="flex sm:items-end items-start flex-col gap-2 w-40">
                            <div className={`sm:px-2 sm:py-4 text-base text-tertiary block ${ind && 'sm:hidden'}`}>Количество дней</div>
                            <div className="sm:px-2 sm:py-4">{row.countOfDays}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
