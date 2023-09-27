import { useLocation, useNavigate } from 'react-router-dom';
import { Title, Text, ContentWrapper } from './NotFoundPage.styled';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { Container } from 'components/Container/Container';
import { MainButton } from 'components/MainButton/MainButton';
import { LogoWrapper } from 'components/LogoWrapper/LogoWrapper';
import { Logo } from 'components/NewHeader/Logo/Logo';

const NotFoundPage = () => {
  const location = useLocation();

  const is404 = location.pathname === '/404';

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <BackgroundImg notFound>
      <Container>
        <LogoWrapper>
          <Logo is404={is404} />
        </LogoWrapper>
        <ContentWrapper>
          <Title>404</Title>
          <Text>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </Text>
          <MainButton
            text="Go Home"
            onClick={handleClick}
            btnStyles={{ width: 'max-content' }}
          />
        </ContentWrapper>
      </Container>
    </BackgroundImg>
  );
};

export default NotFoundPage;
