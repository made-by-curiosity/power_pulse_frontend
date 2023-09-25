import {
  BgContainer,
  Wrapper,
  BgImage,
  NotFoundContentBackground,
} from './BackgroundImg.styled';

export const BackgroundImg = ({ children, notFound }) => {
  return (
    <Wrapper notFound={notFound}>
      <BgContainer notFound={notFound}>
        {notFound && <NotFoundContentBackground notFound={notFound} />}
        <BgImage notFound={notFound} />
      </BgContainer>
      {children}
    </Wrapper>
  );
};
