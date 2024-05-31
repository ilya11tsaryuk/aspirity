import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { UserInfo as UserInfoComponent } from '../components/UserInfo';
import { Statistics } from '../components/Statistics';
import { LeaveHistory } from '../components/LeaveHistory';
import { profileData } from '../mockData';

export default function Profile() {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <main>
            <div className="py-2 px-4 flex items-center gap-2 rounded my-2">
                <ArrowBackIosNewIcon sx={{ color: '#76787a' }} />
                <button className="back-button p-0">Вернуться к сотрудникам</button>
            </div>
            <div className="flex flex-wrap gap-4">
                <UserInfoComponent user={profileData.userInfo} currentTime={currentTime} selects={profileData.selects} />
                <Statistics statisticData={profileData.statisticData} />
                <LeaveHistory rows={profileData.rows} />
            </div>
        </main>
    );
}
