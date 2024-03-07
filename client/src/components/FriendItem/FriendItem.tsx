import React, { FC } from 'react';
import { User } from '../../model/store/types';
import { List } from 'antd';

interface FriendItemProps {
    friend: User;
}

const Item = List.Item;

export const FriendItem: FC<FriendItemProps> = ({ friend }) => {
    return <Item>{`${friend.first_name} ${friend.last_name}`}</Item>;
};
