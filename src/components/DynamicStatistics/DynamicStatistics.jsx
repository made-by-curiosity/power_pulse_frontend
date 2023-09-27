import { StatWrapper } from './DynamicStatistics.styled';
import { TotalIcon } from './DynamicStatistics.styled';
import { TotalInfo } from './DynamicStatistics.styled';
import { TotalNumber } from './DynamicStatistics.styled';
import { TotalName } from './DynamicStatistics.styled';
import icons from '../../assets/icons/svg-sprite.svg';
import { useEffect, useState } from 'react';
import {
  getTotalBurnedCalories,
  getTotalUsers,
  getTotalWorkouts,
  getTotalWorkoutsTime,
} from 'services/powerPulseApi';

export const DynamicStatistics = ({ statistics = 'calories' }) => {
  const [info, setInfo] = useState({ name: 'cal', total: '0' });

  useEffect(() => {
    try {
      (async () => {
        switch (statistics) {
          case 'hours':
            const time = await getTotalWorkoutsTime();
            setInfo({
              name: 'hours',
              total: time.totalWorkoutsTime,
            });

            break;
          case 'users':
            const users = await getTotalUsers();
            setInfo({
              name: 'users',
              total: users.totalUsers,
            });

            break;
          case 'workouts':
            const workouts = await getTotalWorkouts();
            setInfo({
              name: 'ex',
              total: workouts.totalWorkouts,
            });

            break;
          default:
            const calories = await getTotalBurnedCalories();
            setInfo({
              name: 'cal',
              total: calories.totalBurnedCalories,
            });
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [statistics]);

  return (
    <StatWrapper>
      <TotalIcon>
        <svg fill="#efede8">
          {' '}
          <use href={icons + '#icon-running'}></use>
        </svg>
      </TotalIcon>
      <TotalInfo>
        <TotalNumber>{info.total}</TotalNumber>
        <TotalName>{info.name}</TotalName>
      </TotalInfo>
    </StatWrapper>
  );
};
