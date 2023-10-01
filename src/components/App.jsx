import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Transaction } from "./TransactionHistory/Transaction";

export const App = () => (
  <>
    <Profile/>
    <Statistics/>
    <FriendList/>
    <Transaction/>
  </>

);
