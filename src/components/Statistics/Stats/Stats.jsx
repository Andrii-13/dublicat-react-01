import { Label, Licomponent, Percentage, Statistic } from './Stats.styled';
import data from '../data.json';

export const Stats = () => {
  return (
    <Statistic>
      {data.map(({ id, label, percentage }) => {
        return (
          <Licomponent id={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Licomponent>
        );
      })}
    </Statistic>
  );
};
