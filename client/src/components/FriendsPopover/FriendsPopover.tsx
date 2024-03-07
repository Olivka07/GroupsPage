import React, { FC } from 'react';
import { Button, Popover } from 'antd';
import { FriendsList } from '../FriendsList';
import { User } from '../../model/store/types';

interface FriendsPopoverProps {
    friends: User[];
}
export const FriendsPopover: FC<FriendsPopoverProps> = ({ friends }) => {
    return (
        <Popover content={<FriendsList friends={friends} />} trigger="click">
            <Button>
                Друзья-подписчики ({(friends && friends.length) || 0})
            </Button>
        </Popover>
    );
};
