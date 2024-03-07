import React, { FC } from 'react';
import { User } from '../../model/store/types';
import { Divider, List } from 'antd';
import { FriendItem } from '../FriendItem';

interface FriendsListProps {
    friends?: User[];
}
export const FriendsList: FC<FriendsListProps> = ({ friends }) => {
    if (!friends || friends.length === 0) return <div>Список пуст</div>;
    return (
        <>
            <Divider orientation="left">Друзья</Divider>
            <List
                size="large"
                bordered
                dataSource={friends}
                renderItem={(friend, index) => (
                    <FriendItem
                        friend={friend}
                        key={friend.first_name + friend.last_name + index}
                    />
                )}
            />
        </>
    );
};
