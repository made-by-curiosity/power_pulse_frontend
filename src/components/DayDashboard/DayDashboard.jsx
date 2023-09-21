import {
  DayDashboardCont,
  WarningCont,
  WarningText,
  WarningIMG,
} from './DayDashboard.styled';
import { DayDashboardList } from 'components/DayDashboardList/DayDashboardList';
import sprite from '../../assets/icons/svg-sprite.svg';

export const DayDashboard = () => {
  const dashBoardData = [
    { icon: '#icon-cutlery', title: 'daily calorie intake' },
    { icon: '#icon-dumbbell', title: 'daily norm of sports' },
    { icon: '#icon-apple', title: 'calories consumed' },
    { icon: '#icon-calories', title: 'calories burned' },
    { icon: '#icon-bubble', title: 'the rest of the calories' },
    { icon: '#icon-running', title: 'the rest of sports' },
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
