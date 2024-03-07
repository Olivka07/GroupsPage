import { sample } from 'effector';
import { createGate } from 'effector-react';
import { $data, $endOfData, changeHeigthScroll, fetchDataFx } from './units';

// Объявляем gate, для использования в качестве триггера для запроса
export const GateData = createGate();

// Как только данные успеншно получены устанавливаем их в хранилище $data
// в случае неудачи или отсутствия данных устанавливаем null
sample({
    clock: fetchDataFx.doneData,
    source: $data,
    fn: (groups, res) => {
        if (res.data && groups) {
            return [...groups, ...res.data];
        }
        if (res.data) {
            return res.data;
        }
        if (res.result === 1) {
            return groups;
        }
        return null;
    },
    target: $data
});

// Индикатор конца данных
sample({
    clock: fetchDataFx.doneData,
    fn: (res) => {
        if (res.result === 1) {
            return true;
        }
        return false;
    },
    target: $endOfData
});

// Как только gate изменил свое состояние на open осуществляем вызов эффекта для запроса данных
// в качестве аргументов указываем стартовый и конечный элемент массива данных.
// Дополнительно для определения параметров эффекта ссылаемся на высоту скролла.
sample({
    clock: GateData.open,
    fn: () => [0, 5],
    target: fetchDataFx
});

sample({
    clock: changeHeigthScroll,
    fn: (start_end) => {
        return start_end;
    },
    target: fetchDataFx
});
