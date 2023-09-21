import { CaloriesBtn } from 'components/CaloriesBtn/CaloriesBtn';
import { Container } from 'components/Container/Container';
import { TutorialBtn } from 'components/TutorialBtn/TutorialBtn';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { MainButton } from 'components/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';

import { WelcomeBtns, TitleText, WelcomeTitle } from './WelcomePage.styled';

// import icons from '../../assets/icons/svg-sprite.svg';
const WelcomePage = () => {
  const navigate = useNavigate();
  const goToSingUp = () => {
    navigate('/singup');
  };
  const goToSingIn = () => {
    navigate('/singin');
  };
  return (
    <BackgroundImg>
      <Container>
        <WelcomeTitle>
          <TitleText>Transforming your body shape with Power Pulse</TitleText>
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
        <CaloriesBtn />
        <TutorialBtn />
      </Container>
    </BackgroundImg>
  );
};



export default WelcomePage;
