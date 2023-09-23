import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';

import { Container } from 'components/Container/Container';
import { UserCard } from 'components/UserCard/UserCard';
import { UserForm } from 'components/UserForm/UserForm';
import { PageWrapper } from './ProfilePage.styled';
import { ProfilePageTitle } from '../../components/ProfilePageTitle/ProfilePageTitle';

const ProfilePage = () => {
  const userInfo = useSelector(selectUser);
  // console.log(userInfo);

  return (
    <Container>
      <ProfilePageTitle />
      <PageWrapper>
        <UserCard userInfo={userInfo}></UserCard>
        <UserForm userInfo={userInfo}></UserForm>
      </PageWrapper>
    </Container>
  );
};

export default ProfilePage;
