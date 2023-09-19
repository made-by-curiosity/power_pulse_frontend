import { Container } from 'components/Container/Container';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import { DiaryCalendar } from 'components/DiaryCalendar/DiaryCalendar';

const DiaryPage = () => {
  return (
    <Container>
      <DiaryCalendar />
      <DayDashboard />
    </Container>
  );
};

export default DiaryPage;
