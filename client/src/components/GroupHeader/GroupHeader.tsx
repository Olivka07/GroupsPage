import React, { FC } from 'react';
import classes from './groupheader.module.scss';

interface GroupHeaderProps {
    name: string;
    avatar_color?: string;
}

export const GroupHeader: FC<GroupHeaderProps> = ({ name, avatar_color }) => {
    const style = avatar_color
        ? {
              backgroundColor: avatar_color
          }
        : {
              backgroundImage: `url('https://mixmag.io/wp-content/pics13/2023/07/0f7c1575-a491-453b-a195-07a3afdbff64-600x600.jpg')`
          };

    return (
        <div className={classes.container}>
            <img className={classes.img} style={style} />
            <p className={classes.name}>{name}</p>
        </div>
    );
};
