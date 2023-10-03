import {
  Container,
  PageTitle,
  Statistic,
  Licomponent,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomColor } from 'helpers/functions';

export const Statistics = ({ title, stats }) => {
  let bgc;

  return (
    <Container>
      {title ? <PageTitle>{title}</PageTitle> : <></>}

      <Statistic>
        {stats.map(({ id, label, percentage }) => {
          bgc = getRandomColor();
          return (
            <Licomponent key={id} color={bgc}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Licomponent>
          );
        })}
      </Statistic>
    </Container>
  );
};
