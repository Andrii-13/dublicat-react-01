import {
  Container,
  PageTitle,
  Statistic,
  Licomponent,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <PageTitle title={title}>{title}</PageTitle>

      <Statistic>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Licomponent key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Licomponent>
          );
        })}
      </Statistic>
    </Container>
  );
};
