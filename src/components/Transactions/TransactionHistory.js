import {
  TableHeader,
  TransactionTable,
  TableRow,
  TableData,
} from './Transactions.style';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TableRow key={transaction.id}>
            <TableData>{transaction.type}</TableData>
            <TableData>{transaction.amount}</TableData>
            <TableData>{transaction.currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};
