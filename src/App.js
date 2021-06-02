/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import 'modern-normalize/modern-normalize.css';
import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './assets/user.json';
import statisticalData from './assets/statistical-data.json';
import friendsData from './assets/friends.json';
import transactions from './assets/transactions.json';

import './App.css';

function App() {
    return (
        <div className="container">
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={friendsData} />
            <TransactionHistory transactions={transactions} />
        </div>
    );
}

export default App;
