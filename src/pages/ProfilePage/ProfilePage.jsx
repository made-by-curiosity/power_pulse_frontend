import { ProductsFilters } from 'components/ProductsFilters/ProductsFilters';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectUser } from 'redux/auth/selectors';

import { Container } from 'components/Container/Container';
import { UserCard } from 'components/UserCard/UserCard';
import { UserForm } from 'components/UserForm/UserForm';
import { PageWrapper } from './ProfilePage.styled';
import { ProfilePageTitle } from '../../components/ProfilePageTitle/ProfilePageTitle';
import { getUserParams } from 'redux/auth/operations';

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserParams());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userInfo = useSelector(selectUser);

  return (
    <Container>
      <ProfilePageTitle />
      <PageWrapper>
        <UserCard userInfo={userInfo}></UserCard>
        <UserForm userInfo={userInfo}></UserForm>
      </PageWrapper>

      <ProductsFilters></ProductsFilters>
      <br />
      <br />
    </Container>
  );
};

export default ProfilePage;
