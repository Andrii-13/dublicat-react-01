import { 
  // Avatar, 
  FriendsList, 
  // Item, 
  // Name, 
  // Status 
} from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      <FriendListItem
        friends={friends}
        // avatar={friends.avatar}
        // name={friends.name}
        // isOnline={friends.isOnline}
      />
    </FriendsList>
  );
};
