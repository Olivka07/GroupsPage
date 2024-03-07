import React, { FC } from 'react';
import { Card } from 'antd';
import { Group } from '../../model/store/types';
import { GroupHeader } from '../GroupHeader';
import { FriendsPopover } from '../FriendsPopover';
import classes from './group-item.module.scss';

interface GroupItemProps {
    group: Group;
}
export const GroupItem: FC<GroupItemProps> = ({ group }) => {
    return (
        <Card
            className={classes.container}
            title={
                <GroupHeader
                    name={group.name}
                    avatar_color={group.avatar_color || null}
                />
            }
            extra={
                !group.closed ? (
                    <FriendsPopover friends={group.friends || null} />
                ) : (
                    <></>
                )
            }
        >
            <p className={classes.meta}>
                {group.closed ? 'Закрытое' : 'Открытое'} сообщество
            </p>
            <p className={classes.meta}>
                Количество участников: {group.members_count}
            </p>
        </Card>
    );
};
