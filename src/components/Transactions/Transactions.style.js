import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 60%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: #00bfff;
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: center;
`;

export const TableRow = styled.tr`
  text-align: center;
  &:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export const TableData = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
`;
