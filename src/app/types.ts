export type UserInfo = {
    name: string;
    position: string;
    location: string;
    avatar: string;
}

export type LeaveRow = {
    id: number;
    type: string;
    date: [string, string];
    countOfDays: number;
}
export type StatisticData = {
    unAvailableDays: number,
    planed: number,
    availableDays: number,
}
export type ProfileData = {
    userInfo: UserInfo;
    rows: LeaveRow[];
    statisticData: StatisticData;
    selects: string[];
}
