import { Avatar, ListItem, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, status}) => {
     return (    
          <ListItem>
            <Status  $status={status}/>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
          </ListItem>  
 
  );
};
 