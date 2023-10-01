import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
  gap: 20px;
  padding-bottom: 50px;
`;

export const Item = styled.li`
  display: flex;
  width: 100%;
  height: 150px;
  background: white;
  padding: 10px 10px;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), 2px 4px 6px rgba(0, 0, 0, 0.2);
`;
export const Status = styled.span`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${({$status}) => ($status ? 'green' : 'red')};
  border-radius: 50%;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  background-color: #d3d2d2;
  border-radius: 10px;
`;
export const Name = styled.p`
  font-size: 50px;
  align-items: center;
  text-align: center;
  margin-left: 20px;
`;
