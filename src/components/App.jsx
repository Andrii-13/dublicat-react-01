import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'components/Data/user.json';
import data from 'components/Data/data.json';
import friends from 'components/Data/friends.json'
import transactions from 'components/Data/transactions.json';




export const App = () => (

  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
  </>
);

