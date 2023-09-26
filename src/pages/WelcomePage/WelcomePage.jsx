import { Container } from 'components/Container/Container';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { MainButton } from 'components/MainButton/MainButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { WelcomeBtns, TitleText, WelcomeTitle } from './WelcomePage.styled';
import { useState } from 'react';
import { HighlightedWord } from 'components/HighlightedWord/HighlightedWord';
import { WordHighlighter } from 'components/WordHighlighter/WordHighlighter';
import { useDispatch } from 'react-redux';
import { signUpWithToken } from 'redux/auth/operations';

const WelcomePage = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  if (token) {
    dispatch(signUpWithToken(token));
  }

  const navigate = useNavigate();
  const goToSingUp = () => {
    navigate('/signup');
  };
  const goToSingIn = () => {
    navigate('/signin');
  };
  return (
    <BackgroundImg>
      <WordHighlighter position={position} />
      <Container>
        <WelcomeTitle>
          <TitleText>
            Transforming your{' '}
            <HighlightedWord word="body" setPosition={setPosition} /> shape with
            Power Pulse
          </TitleText>
        </WelcomeTitle>
        <WelcomeBtns>
          <MainButton
            type="button"
            text="Sign Up"
            filled
            onClick={goToSingUp}
            btnStyles={{ width: 'max-content' }}
          />

          <MainButton
            type="button"
            text="Sign In"
            onClick={goToSingIn}
            btnStyles={{ width: 'max-content' }}
          />
        </WelcomeBtns>
      </Container>
    </BackgroundImg>
  );
};

export default WelcomePage;
