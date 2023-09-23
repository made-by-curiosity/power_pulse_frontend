import { Container } from 'components/Container/Container';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import { Title } from '../../components/Title/Title';
import { DiaryCalendar } from 'components/DiaryCalendar/DiaryCalendar';
import { DiaryTitleContainer } from 'components/DiaryTitleContainer/DiaryTitleContainer';
import { DiaryDashboardContainer } from 'components/DiaryDashboardContainer/DiaryDashboardContainer';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayExercises } from '../../components/DayExercises/DayExercises.jsx';

const DiaryPage = () => {
  return (
    <Container>
      <DiaryTitleContainer>
        <Title>{'Diary'}</Title>
        <DiaryCalendar />
      </DiaryTitleContainer>
      <DiaryDashboardContainer>
        <div>
          {/* Сюда надо вставить две табилицы (продукты и упражнения) */}
          <DayProducts />
          <DayExercises />
        </div>
        <DayDashboard />
      </DiaryDashboardContainer>
    </Container>
  );
};

export default DiaryPage;
