import { ProfileData } from "./types";

export const profileData: ProfileData = {
    userInfo: {
        name: 'Иванов Иван Иванович',
        position: 'Junior UI/UX designer',
        location: 'Россия, Красноярск',
        avatar: 'avatar.png'
    },
    statisticData: {
        unAvailableDays: 4,
        planed: 8,
        availableDays: 32,
    },
    rows: [
        {
            id: 1,
            type: 'Отпуск',
            date: ['03 марта 2023', '23 марта 2023'],
            countOfDays: 20,
        },
        {
            id: 2,
            type: 'Отгул',
            date: ['05 марта 2023', '23 марта 2023'],
            countOfDays: 18,
        },
    ],
    selects: ['Основная Информация', 'Отпуск', 'Оборудование'],
};