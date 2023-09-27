import { Container } from 'components/Container/Container';
import React from 'react';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { LogoWrapper } from 'components/LogoWrapper/LogoWrapper';
import { Logo } from 'components/NewHeader/Logo/Logo';
import { useLocation } from 'react-router-dom';

const SignUpPage = () => {
  const location = useLocation();

  const is404 = location.pathname === '/404';
  return (
    <BackgroundImg>
      <Container>
        <LogoWrapper>
          <Logo is404={is404} />
        </LogoWrapper>
        <SignUpForm />
      </Container>
    </BackgroundImg>
  );
};

export default SignUpPage;
