import PropTypes from 'prop-types';

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

UserCard.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userParams: PropTypes.shape({
      height: PropTypes.number.isRequired,
      currentWeight: PropTypes.number.isRequired,
      desiredWeight: PropTypes.number.isRequired,
      birthday: PropTypes.string.isRequired,
      blood: PropTypes.number.isRequired,
      sex: PropTypes.string.isRequired,
      levelActivity: PropTypes.number.isRequired,
    }).isRequired,
    avatarUrls: PropTypes.shape({
      mobile: PropTypes.string,
      desktop: PropTypes.string,
    }),
    bmr: PropTypes.number,
  }).isRequired,
};
