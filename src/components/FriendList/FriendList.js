import { FriendCard } from 'components/FriendCard/FriendCard';
import { FriendListItem, List } from './FriendList.style';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FriendCard items={friend} />
        </FriendListItem>
      ))}
    </List>
  );
};
