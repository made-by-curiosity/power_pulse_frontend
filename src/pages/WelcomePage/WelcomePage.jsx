import { CaloriesBtn } from 'components/CaloriesBtn/CaloriesBtn';
import { Container } from 'components/Container/Container';
import { TutorialBtn } from 'components/TutorialBtn/TutorialBtn';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { MainButton } from 'components/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';
import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard'; 
import { WelcomeBtns, TitleText, WelcomeTitle } from './WelcomePage.styled';

const WelcomePage = () => {
  const navigate = useNavigate();
  const goToSingUp = () => {
    navigate('/signup');
  };
  const goToSingIn = () => {
    navigate('/signin');
  };
  return (
    <BackgroundImg>
      <Container>
        <ExerciseCard/>
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
