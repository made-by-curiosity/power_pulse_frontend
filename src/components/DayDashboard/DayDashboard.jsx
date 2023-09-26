import {
  DayDashboardCont,
  WarningCont,
  WarningText,
  WarningIMG,
} from './DayDashboard.styled';
import { DayDashboardList } from 'components/DayDashboardList/DayDashboardList';
import sprite from '../../assets/icons/svg-sprite.svg';
import PropTypes from 'prop-types';

export const DayDashboard = ({
  dailyCalories,
  totalCalories,
  totalTime,
  burnedCalories,
}) => {
  const normOfSports = 110;

  const dashBoardData = [
    {
      icon: '#icon-cutlery',
      title: 'daily calorie intake',
      value: dailyCalories ? dailyCalories : 0,
    },
    {
      icon: '#icon-dumbbell',
      title: 'daily norm of sports',
      value: normOfSports,
    },
    {
      icon: '#icon-apple',
      title: 'calories consumed',
      value: totalCalories ? totalCalories : 0,
    },
    {
      icon: '#icon-calories',
      title: 'calories burned',
      value: burnedCalories ? burnedCalories : 0,
    },
    {
      icon: '#icon-bubble',
      title: 'the rest of the calories',
      value: dailyCalories
        ? totalCalories
          ? dailyCalories - totalCalories
          : dailyCalories - 0
        : 0,
      borderColor:
        dailyCalories < totalCalories ? 'red' : 'rgba(239, 237, 232, 0.2)',
    },
    {
      icon: '#icon-running',
      title: 'the rest of sports',
      value: totalTime
        ? normOfSports - totalTime <= 0
          ? `+ ${Math.abs(normOfSports - totalTime)}`
          : normOfSports - totalTime
        : normOfSports,
      borderColor:
        normOfSports < totalTime ? 'green' : 'rgba(239, 237, 232, 0.2)',
    },
  ];

  return (
    <DayDashboardCont>
      <DayDashboardList data={dashBoardData} />
      <WarningCont>
        <WarningIMG width="24" height="24">
          <use href={sprite + '#icon-warning'}></use>
        </WarningIMG>
        <WarningText img={sprite + '#icon-warning'}>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </WarningText>
      </WarningCont>
    </DayDashboardCont>
  );
};

DayDashboard.propTypes = {
  dailyCalories: PropTypes.number,
  totalCalories: PropTypes.number,
  totalTime: PropTypes.number,
  burnedCalories: PropTypes.number,
};
