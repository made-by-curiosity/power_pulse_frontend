import { Container } from 'components/Container/Container';
import { DayDashboard } from 'components/DayDashboard/DayDashboard';
import { Title } from '../../components/Title/Title';
import { DiaryCalendar } from 'components/DiaryCalendar/DiaryCalendar';
import { DiaryTitleContainer } from 'components/DiaryTitleContainer/DiaryTitleContainer';
import { DiaryDashboardContainer } from 'components/DiaryDashboardContainer/DiaryDashboardContainer';
import { DayExercises } from 'components/DayExercises/DayExercises';
import { DayProducts } from 'components/DayProducts/DayProducts';
import { DiaryTablesCont } from 'components/DiaryTablesCont/DiaryTablesCont';
import { useEffect, useState } from 'react';
import { getMeals, getWorkouts, getUserInfo } from 'services/powerPulseApi';

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [createdAt, setCreatedAt] = useState(new Date());
  const [dailyCalories, setDailyCalories] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);

  const sumArrayValues = array => {
    return array.reduce((acc, currentValue) => acc + currentValue, 0);
  };

  useEffect(() => {
    getUserInfo()
      .then(info => {
        setCreatedAt(new Date(info.user.createdAt));
        setDailyCalories(info.bmr);
      })
      .catch(error => {
        console.log(error);
      }); //добавить обработчик ошибки

    getMeals(selectedDate)
      .then(products => {
        const caloriesArray = products.map(product => product.calories);

        const totalCalories = sumArrayValues(caloriesArray);
        setTotalCalories(totalCalories);
      })
      .catch(error => {
        console.log(error);
      }); //добавить обработчик ошибки

    getWorkouts(selectedDate).then(workouts => {
      const timeArray = workouts.map(workout => workout.time);
      const caloriesArray = workouts.map(workout => workout.calories);

      const totalTime = sumArrayValues(timeArray);

      const totalBurnedCalories = sumArrayValues(caloriesArray);

      setTotalTime(totalTime);

      setBurnedCalories(totalBurnedCalories);
    });
  }, [selectedDate]);

  return (
    <Container>
      <DiaryTitleContainer>
        <Title>{'Diary'}</Title>
        <DiaryCalendar
          createdAt={createdAt}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </DiaryTitleContainer>
      <DiaryDashboardContainer>
        <DiaryTablesCont>
          {/* <DayProducts />
          <DayExercises /> */}
        </DiaryTablesCont>
        <DayDashboard
          dailyCalories={dailyCalories}
          totalCalories={totalCalories}
          totalTime={totalTime}
          burnedCalories={burnedCalories}
        />
      </DiaryDashboardContainer>
    </Container>
  );
};

export default DiaryPage;
