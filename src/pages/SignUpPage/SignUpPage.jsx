import { Container } from 'components/Container/Container';
import React from 'react';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';

const SignUpPage = () => {
  return (
    <BackgroundImg>
      <Container>
        <SignUpForm />
      </Container>
    </BackgroundImg>
  );
};

export default SignUpPage;
