import React from 'react';
import { Avatar } from "@mui/material";
import { UserInfo as UserInfoType } from '../types';

export const UserInfo = ({ user, currentTime, selects }: { user: UserInfoType, currentTime: string, selects: string[] }) => {
    return (
        <div className="w-full rounded-xl bg-secondary flex flex-col pt-8 pl-4 pb-3 justify-between">
            <div className="flex flex-wrap justify-center sm:justify-start gap-0 sm:gap-12">
                <Avatar sx={{ width: '160px', height: '160px' }} src={user.avatar} />
                <div className="flex flex-col mt-4 items-center sm:items-start">
                    <p className="text-primary text-center sm:text-left" style={{ height: '112px', width: '398px', fontWeight: 700, fontSize: '48px', lineHeight: '56px' }}>{user.name}</p>
                    <p className="mt-6 text-base text-primary" style={{ fontWeight: 400, lineHeight: '24px' }}>{user.position}</p>
                    <div className="mt-6 text-base text-primary flex items-center gap-2" style={{ fontWeight: 400, lineHeight: '24px' }}>
                        <p>{user.location}</p>
                        <p>·</p>
                        <p>{currentTime}</p>
                    </div>
                </div>
                <div className="mt-5 flex border-b border-primary max-w-max items-center overflow-auto overflow-y-hidden max-h-10">
                    {selects.map((select) => (
                        <div key={select} style={{ padding: '10px 16px' }} className={`${true ? 'border-accent border-b-2 text-primary' : 'text-secondary'} text`}>{select}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
