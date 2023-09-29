import { BgContainer, BgImage, Wrapper } from './SecondaryPageBg.styled';

export const SecondaryPageBg = ({ children, page = 'exercises' }) => {
  return (
    <Wrapper>
      <BgContainer>
        <BgImage page={page} />
      </BgContainer>
      {children}
    </Wrapper>
  );
};
