import React, { FC, useEffect, useState } from 'react';
import './styles/index.scss';
import { $data, GateData, fetchDataFx } from '../model';
import { useGate, useUnit } from 'effector-react';
import { Loading } from '../components/Loading';
import { GroupList } from '../components/GroupList';
import { $endOfData, changeHeigthScroll } from '../model/store/units';

const App: FC = () => {
    const [count, setCount] = useState<number>(5);
    const [groups, loading, endOfData] = useUnit([
        $data,
        fetchDataFx.pending,
        $endOfData
    ]);

    useGate(GateData);

    const checkScroll = () => {
        const height = window.scrollY + document.scrollingElement.clientHeight;
        if (document.body.clientHeight - Math.ceil(height) <= 0) {
            if (!endOfData) {
                changeHeigthScroll([count, count + 5]);
                setCount((prev) => prev + 5);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, [count, endOfData]);

    return (
        <main>
            <GroupList groups={groups} />
            {loading && <Loading />}
        </main>
    );
};

export default App;
