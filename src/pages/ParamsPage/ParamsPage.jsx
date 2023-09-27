import { Container } from 'components/Container/Container';
import { ParamsForm } from 'components/ParamsForm/ParamsForm';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { useLocation } from 'react-router-dom';
import { LogoWrapper } from 'components/LogoWrapper/LogoWrapper';
import { Logo } from 'components/NewHeader/Logo/Logo';
import { useState } from 'react';

const ParamsPage = () => {
  const [backgroundStep, setBackgroundStep] = useState(1);
  const location = useLocation();

  const is404 = location.pathname === '/404';

  return (
    <BackgroundImg backgroundStep={backgroundStep}>
      <Container>
        <LogoWrapper>
          <Logo is404={is404} />
        </LogoWrapper>
        <ParamsForm setBackgroundStep={setBackgroundStep} />
      </Container>
    </BackgroundImg>
  );
};

export default ParamsPage;
