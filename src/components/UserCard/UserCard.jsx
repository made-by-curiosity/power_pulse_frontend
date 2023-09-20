import { Avatar } from 'components/Avatar/Avatar';
import { InfoCard } from 'components/InfoCard/InfoCard';
import { InfoCardsWrapper } from 'components/InfoCard/InfoCard.styled';
import { WarningNotice } from 'components/WarningNotice/WarningNotice';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';

import { UserCardWrapper } from './UserCard.styled';

const calories = {
  icon: '#icon-cutlery',
  label: 'Daily calorie intake',
  number: '2200',
};

const normOfSports = {
  icon: '#icon-dumbbell',
  label: 'Daily norm of sports',
  number: '110 min',
};

export const UserCard = ({ user }) => {
  const { name, avatar, dailyCalorieIntake, dailyNormOfSports } = user;

  return (
    <UserCardWrapper>
      <Avatar name={name} avatar={avatar}></Avatar>
      <InfoCardsWrapper>
        <InfoCard
          icon={calories.icon}
          label={calories.label}
          number={dailyCalorieIntake}
        ></InfoCard>
        <InfoCard
          icon={normOfSports.icon}
          label={normOfSports.label}
          number={dailyNormOfSports}
        ></InfoCard>
      </InfoCardsWrapper>
      <WarningNotice></WarningNotice>
      <LogoutBtn></LogoutBtn>
    </UserCardWrapper>
  );
};
