import { Container } from 'components/Container/Container';

import { ParamsForm } from 'components/ParamsForm/ParamsForm';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import { useLocation } from 'react-router-dom';
import { LogoWrapper } from 'components/LogoWrapper/LogoWrapper';
import { Logo } from 'components/NewHeader/Logo/Logo';

const ParamsPage = () => {
  const location = useLocation();

  const is404 = location.pathname === '/404';

  return (
    <BackgroundImg>
      <Container>
        <LogoWrapper>
          <Logo is404={is404} />
        </LogoWrapper>
        <ParamsForm />
      </Container>
    </BackgroundImg>
  );
};

export default ParamsPage;
