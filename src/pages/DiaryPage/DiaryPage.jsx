import { Container } from 'components/Container/Container';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import { Title } from '../../components/Title/Title';
import { DiaryCalendar } from 'components/DiaryCalendar/DiaryCalendar';
import { DiaryTitleContainer } from 'components/DiaryTitleContainer/DiaryTitleContainer';
import { DiaryDashboardContainer } from 'components/DiaryDashboardContainer/DiaryDashboardContainer';
import { DayExercises } from 'components/DayExercises/DayExercises';
import { DayProducts } from 'components/DayProducts/DayProducts';
import { DiaryTablesCont } from 'components/DiaryTablesCont/DiaryTablesCont';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const DiaryPage = () => {
  const { createdAt } = useSelector(selectUser);
  const createdUser = new Date(createdAt);

  return (
    <Container>
      <DiaryTitleContainer>
        <Title>{'Diary'}</Title>
        <DiaryCalendar createdAt={createdUser} />
      </DiaryTitleContainer>
      <DiaryDashboardContainer>
        <DiaryTablesCont>
          <DayProducts />
          <DayExercises />
        </DiaryTablesCont>
        <DayDashboard />
      </DiaryDashboardContainer>
    </Container>
  );
};

export default DiaryPage;
