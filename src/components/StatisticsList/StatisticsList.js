import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import { ItemList, List } from './StatisticsList.style';

export const StatisticsList = ({ stats }) => {
  return (
    <List className="stat-list">
      {stats.map(stat => (
        <ItemList key={stat.id} className="item">
          <StatisticsItem stats={stat} />
        </ItemList>
      ))}
    </List>
  );
};
