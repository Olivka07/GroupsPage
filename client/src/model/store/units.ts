import { createStore, createEffect, createEvent } from 'effector';
import { Group } from './types';
import { getData } from '../../helpers';

// Хранилище данных
export const $data = createStore<Group[]>(null);

// Индикатор конца данных
export const $endOfData = createStore<boolean>(false);

// Эффект для отправки запроса на сервер
export const fetchDataFx = createEffect('Fetch data about groups', {
    handler: ([start, end]: any) => getData('/data', start, end)
});

// Event для наступления события изменения скролла
export const changeHeigthScroll =
    createEvent<[number, number]>('Change scroll');
