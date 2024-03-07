import React from 'react';
import { Spin } from 'antd';
import classes from './loading.module.scss';

export const Loading = () => {
    return (
        <>
            <div className={classes.modal}></div>
            <Spin className={classes.spin} />
        </>
    );
};
