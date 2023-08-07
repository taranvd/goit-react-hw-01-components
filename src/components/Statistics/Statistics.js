import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Wrapper, Topic } from './Statistics.style';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper className="statistics">
      <Topic className="title">{title}</Topic>

      <StatisticsList stats={stats} />
    </Wrapper>
  );
};
