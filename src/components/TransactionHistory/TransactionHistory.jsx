import {
  TableHead,
  TableRow,
  TableTag,  
  TableData,
} from './TransactionHistory.styled';


let i = 0;

export const TransactionHistory = ({items}) => {
  return (
    <TableTag>
      <TableHead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          i += 1;
          return (
            <TableRow key={id} $number={i}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </TableTag>
  );
};
