import styled from '@emotion/styled';

export const MainContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 62px 20px 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 84px 32px 0 96px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 84px 96px 0 96px;
  }
`;
