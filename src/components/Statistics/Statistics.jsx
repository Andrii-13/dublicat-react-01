import {
  Container,
  PageTitle,
  Statistic,
  Licomponent,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  let bgc;

  return (
    <Container>
      <PageTitle title={title}>{title}</PageTitle>

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

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
