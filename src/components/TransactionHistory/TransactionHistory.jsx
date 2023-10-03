import {
  TableHead,
  TableRow,
  TableTag,  
  TableData,
} from './TransactionHistory.styled';

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
        {items.map(({ id, type, amount, currency }, index) => {
         return (
            <TableRow key={id} $idx={index}>
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
