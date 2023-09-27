import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { Container } from 'components/Container/Container';
import { LogoWrapper } from 'components/LogoWrapper/LogoWrapper';
import { Logo } from 'components/NewHeader/Logo/Logo';
import SignInForm from 'components/SingInForm/SingInForm';
import { useLocation } from 'react-router-dom';

const SignInPage = () => {
  const location = useLocation();

  const is404 = location.pathname === '/404';

  return (
    <BackgroundImg>
      <Container>
        <LogoWrapper>
          <Logo is404={is404} />
        </LogoWrapper>
        <SignInForm />
      </Container>
    </BackgroundImg>
  );
};

export default SignInPage;
