import {
  ProfileWrap,
  Description,
  Title,
  Text,
  ListStats,
  ItemStats,
  Avatar,
} from './Profile.style';

export const Profile = props => {
  const { avatar, location, tag, username, stats } = props;
  return (
    <ProfileWrap>
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Title className="name">{username}</Title>
        <Text className="tag">@{tag}</Text>
        <Text className="location">{location}</Text>
      </Description>

      <ListStats>
        <ItemStats>
          <Text className="label">Followers</Text>
          <b>
            <span className="quantity">{stats.followers}</span>
          </b>
        </ItemStats>
        <ItemStats>
          <Text className="label">Views</Text>
          <b>
            <span className="quantity">{stats.views}</span>
          </b>
        </ItemStats>
        <ItemStats>
          <Text className="label">Likes</Text>
          <b>
            <span className="quantity">{stats.likes}</span>
          </b>
        </ItemStats>
      </ListStats>
    </ProfileWrap>
  );
};
