import { Container } from 'components/Container/Container';
import { UserCard } from 'components/UserCard/UserCard';
import { UserForm } from 'components/UserForm/UserForm';

const user = {
  name: 'Anna Rybachok',
  email: 'annarybachok@gmail.com',
  avatar: undefined,
  height: 165,
  currentWeight: 52,
  desiredWeight: 47,
  birthday: '24.09.1998',
  blood: 1,
  sex: 'female',
  lifeStyleType: 'Sedentary lifestyle (little or no physical activity)',
  dailyCalorieIntake: 2200,
  dailyNormOfSports: '110 min',
};

const ProfilePage = () => {
  return (
    <Container>
      <UserCard user={user}></UserCard>
      <div>---</div>
      <div>---</div>
      <div>---</div>
      <UserForm></UserForm>
      <div>---</div>
      <div>---</div>
      <div>---</div>
    </Container>
  );
};

export default ProfilePage;
