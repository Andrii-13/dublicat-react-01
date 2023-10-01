import styled from 'styled-components';

export const TableTag = styled.table`
  width: 1000px;
  margin: 0 auto;
  background: white;
  margin-bottom: 100px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2), 2px 4px 6px rgba(0,0,0,0.2);
`;

export const TableHead = styled.thead`
  height: 50px;
  text-align: center;
  color: white;
  background: rgb(0, 150, 255);  
`;

export const TableRow = styled.tr`
  height: 50px;
  text-align: center;
  background: ${({$number}) => (
    $number % 2 === 0 ? 'rgba(10, 10, 10, 0.05)' : 'rgba(0, 0, 0, 0)'
  )};

th{
  width: calc(100% / 3);
}
`;


export const TableData = styled.td`
  border: 1px solid rgba(10, 10, 10, 0.1);
`;
