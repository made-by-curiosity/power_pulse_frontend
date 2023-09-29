import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  position: relative;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    padding: 72px 0 40px;
  }
`;
