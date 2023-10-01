import {
  TableHead,
  TableRow,
  TableTag,  
  TableData,
} from './Table.styled';
import transactions from '../transactions.json';

let i = 0;



export const Table = () => {
  
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
                   
        {transactions.map(({ id, type, amount, currency }) => {
            i+=1
           return (
            <TableRow key={id} $number = {i} >
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
