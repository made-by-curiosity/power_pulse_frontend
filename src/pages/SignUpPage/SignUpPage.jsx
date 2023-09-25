import { Container } from 'components/Container/Container';
import React from 'react';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { BckgSignUp } from 'components/BckgSignUp/BckgSignUp';

const SignUpPage = () => {
  return (
    <BckgSignUp>
      <Container>
        <SignUpForm />
      </Container>
    </BckgSignUp>
  );
};

export default SignUpPage;
