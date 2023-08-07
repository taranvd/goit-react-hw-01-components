import styled from 'styled-components';

export const Status = styled.span`
  margin-right: 10px;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 100%;
`;

export const Avatar = styled.img`
  margin-right: 10px;
  border-radius: 100%;
`;

export const FriendName = styled.span`
  margin-right: 10px;
`;
