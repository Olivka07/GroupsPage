import axios from 'axios';
import { GetGroupsResponse } from '../../model/store/types';
import { API_URL } from '../../consts';

// Получение данных с сервера (конкатенация с базовым URL конкретного эндпоинта)
export const getData = async (path: string, start: number, end: number) => {
    try {
        const response = await axios.get<GetGroupsResponse>(
            `${API_URL}${path}?start=${start}&end=${end}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true
                }
            }
        );
        const candidate = response.data;
        return candidate;
    } catch (e) {
        throw new Error(
            `Ошибка при попытке получить данные по адресу: ${API_URL}${path}`
        );
    }
};
