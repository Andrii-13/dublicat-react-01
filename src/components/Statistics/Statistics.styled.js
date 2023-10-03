import styled from 'styled-components';

export const Container = styled.section`
  width: 1000px;
  margin: 0 auto;
  background: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), 2px 4px 6px rgba(0, 0, 0, 0.2);
`;
export const PageTitle = styled.h2`
  font-size: 50px;
  text-align: center;
  padding: 80px 10px;
  /* display: ${({title})=>(title ? 'block' : 'none')}; */
`;

export const Statistic = styled.ul`
  display: flex;
  height: 250px;
  margin-bottom: 50px;
`;

export const Licomponent = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({color})=> (color)};
  width: calc(100% / 4);
  font-size: 50px;
  justify-content: center;
  text-align: center;
  border: 1px solid rgb(100, 100, 100);
`;

export const Label = styled.span`
  font-size: 30px;
  padding: 10px;
  font-weight: 500;
  `;

export const Percentage = styled.span`
  font-size: 40px;
  font-weight: 700;
  
`;
