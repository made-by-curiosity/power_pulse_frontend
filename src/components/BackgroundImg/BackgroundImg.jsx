import {
  BgContainer,
  Wrapper,
  BgImage,
  NotFoundContentBackground,
} from './BackgroundImg.styled';

export const BackgroundImg = ({ children, notFound }) => {
  return (
    <Wrapper>
      <BgContainer notFound={notFound}>
        {notFound && <NotFoundContentBackground />}
        <BgImage />
      </BgContainer>
      {children}
    </Wrapper>
  );
};
