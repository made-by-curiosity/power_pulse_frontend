import { TutorialBtn } from 'components/TutorialBtn/TutorialBtn';
import {
  BgContainer,
  Wrapper,
  BgImage,
  NotFoundContentBackground,
} from './BackgroundImg.styled';
import { CaloriesBtn } from 'components/CaloriesBtn/CaloriesBtn';

export const BackgroundImg = ({ children, notFound, statistics }) => {
  return (
    <Wrapper notFound={notFound}>
      <BgContainer notFound={notFound}>
        {notFound && <NotFoundContentBackground notFound={notFound} />}
        <BgImage notFound={notFound} />
        {!notFound && (
          <>
            <TutorialBtn />
            <CaloriesBtn statistics={statistics} />
          </>
        )}
      </BgContainer>
      {children}
    </Wrapper>
  );
};
