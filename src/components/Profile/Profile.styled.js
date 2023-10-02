import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  width: 500px;
  margin: 20px auto;
  margin-bottom: 50px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  div {
    padding: 20px;
    text-align: center;

    img {
      width: 200px;
      margin: 50px;
      background-color: rgb(235, 180, 139);
      border-radius: 50%;
    }
  }
  ul {
    display: flex;
    align-items: center;
    height: 244px;
    background-color: rgb(226, 226, 226);

    li {
      display: flex;
      flex-direction: column;
      flex-basis: calc(100% / 3);
      text-align: center;
      height: 100%;
      border: 1px solid rgb(184, 183, 183);
    }
  }
`;

export const Name = styled.p`
  font-size: 40px;
  font-weight: 800;
  padding-bottom: 10px;
`;

export const TagLocation = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
`;

export const Label = styled.span`
          display: flex;
          font-size: 20px;
          height: 100%;
          margin: 0 auto;
          align-items: flex-end;
`

export const Quantity = styled.span`
          display: flex;
          padding-top: 10px;
          font-size: 20px;
          font-weight: 800;
          height: 100%;
          margin: 0 auto;
          align-items: flex-start;
`