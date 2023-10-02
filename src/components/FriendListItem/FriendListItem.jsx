import { Avatar, ListItem, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({friends}) => {
   return (
    <>
      {friends.map(({ id, isOnline, avatar, name }) => {
        // console.log(isOnline);
        return (
          <ListItem key={id}>
            <Status $status={isOnline} />
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
          </ListItem>
        );
      })}
    </>
  );
};
