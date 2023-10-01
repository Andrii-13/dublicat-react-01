import { Avatar, FriendsList, Item, Name, Status } from './FriendList.styled';
import friends from './friends.json';

console.log(friends);

export const FriendList = () => {
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => {
        console.log(isOnline);
        return (            
          <Item key={id}>
            <Status status={isOnline} />
            <Avatar src={avatar} />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </FriendsList>
  );
};
//
//
//
