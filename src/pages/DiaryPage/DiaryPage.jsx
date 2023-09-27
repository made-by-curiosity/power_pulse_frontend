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
  const [meals, setMeals] = useState([]);
  const [workouts, setWorkouts] = useState([]);

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
        setMeals(products);
      })
      .catch(error => {
        console.log(error);
      }); //добавить обработчик ошибки

    getWorkouts(selectedDate).then(workouts => {
      setWorkouts(workouts);
    });
  }, [selectedDate]);

  useEffect(() => {
    const caloriesArray = meals.map(meal => meal.calories);
    const totalCalories = sumArrayValues(caloriesArray);
    setTotalCalories(totalCalories);

    const timeArray = workouts.map(workout => workout.time);
    const totalTime = sumArrayValues(timeArray);
    setTotalTime(totalTime);

    const burntCaloriesArray = workouts.map(workout => workout.calories);
    const totalBurnedCalories = sumArrayValues(burntCaloriesArray);
    setBurnedCalories(totalBurnedCalories);
  }, [meals, workouts]);

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
          <DayProducts meals={meals} setMeals={setMeals} />
          <DayExercises workouts={workouts} setWorkouts={setWorkouts} />
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
