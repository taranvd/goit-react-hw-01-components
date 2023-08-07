import { Status, Avatar, FriendName } from './FriendsCard.style';

export const FriendCard = ({ items: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status className="status" $isOnline={isOnline} />
      <Avatar className="avatar" src={avatar} alt={name} width="48" />
      <FriendName className="name">{name}</FriendName>
    </>
  );
};
