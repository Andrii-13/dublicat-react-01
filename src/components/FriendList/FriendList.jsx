import { 
  // Avatar, 
  FriendsList, 
  // Item, 
  // Name, 
  // Status 
} from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => { 
  return (
    <FriendsList>
      {friends.map(({id, avatar, name, isOnline})=>(
        <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        status={isOnline}
      />
      ))}      
    </FriendsList>
  );
};





    