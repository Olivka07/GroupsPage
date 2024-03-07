import React, { FC } from 'react';
import { Card } from 'antd';
import { GroupItem } from '../GroupItem';
import { Group } from '../../model/store/types';
import classes from './group-list.module.scss';

interface GroupListProps {
    groups: Group[];
}

export const GroupList: FC<GroupListProps> = ({ groups }) => {
    if (!groups || groups.length === 0)
        return (
            <Card title="Сообщества">
                <p className={classes.placeholder}>Empty</p>
            </Card>
        );

    return (
        <Card className={classes.card} title="Сообщества">
            {groups.length > 0 &&
                groups.map((group) => {
                    return <GroupItem group={group} key={group.id} />;
                })}
        </Card>
    );
};
