import { Wrapper, TextTop, TextBottom } from './StatisticsItem.style';

export const StatisticsItem = ({ stats }) => {
  return (
    <Wrapper>
      <TextTop className="label">{stats.label}</TextTop>
      <TextBottom className="percentage">{stats.percentage}%</TextBottom>
    </Wrapper>
  );
};
