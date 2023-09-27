import { Avatar } from 'components/Avatar/Avatar';
import { InfoCard } from 'components/InfoCard/InfoCard';
import { InfoCardsWrapper } from 'components/InfoCard/InfoCard.styled';
import { WarningNotice } from 'components/WarningNotice/WarningNotice';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';

import { UserCardWrapper } from './UserCard.styled';

const calories = {
  icon: '#icon-cutlery',
  label: 'Daily calorie intake',
};

const normOfSports = {
  icon: '#icon-dumbbell',
  label: 'Daily norm of sports',
  number: '110 min',
};

export const UserCard = ({ userInfo }) => {
  const { name, avatarUrls, bmr } = userInfo;

  return (
    <UserCardWrapper>
      <Avatar name={name} avatarUrls={avatarUrls}></Avatar>
      <InfoCardsWrapper>
        <InfoCard
          icon={calories.icon}
          label={calories.label}
          number={bmr}
        ></InfoCard>
        <InfoCard
          icon={normOfSports.icon}
          label={normOfSports.label}
          number={normOfSports.number}
        ></InfoCard>
      </InfoCardsWrapper>
      <WarningNotice></WarningNotice>
      <LogoutBtn></LogoutBtn>
    </UserCardWrapper>
  );
};
