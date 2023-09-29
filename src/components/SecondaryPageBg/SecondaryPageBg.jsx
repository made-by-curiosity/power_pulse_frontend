import { BgContainer, BgImage, Wrapper } from './SecondaryPageBg.styled';

export const SecondaryPageBg = ({ children, page = 'exercises', isFilter }) => {
  return (
    <Wrapper isFilter={isFilter}>
      <BgContainer isFilter={isFilter}>
        <BgImage page={page} isFilter={isFilter} />
      </BgContainer>
      {children}
    </Wrapper>
  );
};
