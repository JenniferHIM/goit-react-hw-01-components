/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
return (
    <ul className={styles.friendList}>
        {friends.map(({
 id, avatar, name, isOnline,
}) => (
    <FriendListItem
      key={id}
      isOnline={isOnline}
      avatar={avatar}
      name={name}
    />
))}
    </ul>
);
}

FriendList.defaultProps = {
friends: [],
};

FriendList.propTypes = {
friends: PropTypes.array,
};
