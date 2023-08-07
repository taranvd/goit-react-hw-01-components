import styled from 'styled-components';

// Ul styles
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// li styles

export const ItemList = styled.li`
  color: #fff;
  padding: 20px;
  background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  const hexColor = `#${redHex}${greenHex}${blueHex}`;

  return hexColor;
}
