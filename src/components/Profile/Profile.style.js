import styled from 'styled-components';

// container profile card
export const ProfileWrap = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
`;

// info content profle card
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

//image profile card

export const Avatar = styled.img`
  border: 1px solid black;
  width: 100px;
  border-radius: 100%;
`;

//Text content profile card
export const Title = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: grey;
`;

// Profile stats
export const ListStats = styled.ul`
  display: flex;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border: 1px solid #eee;
`;
