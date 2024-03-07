import { createStore, createEffect, createEvent } from 'effector';
import { Group } from './types';
import { getData } from '../../helpers';

export const $data = createStore<Group[]>(null);
export const $endOfData = createStore<boolean>(false);
export const fetchDataFx = createEffect('Fetch data about groups', {
    handler: ([start, end]: any) => getData('/data', start, end)
});
export const changeHeigthScroll =
    createEvent<[number, number]>('Change scroll');
