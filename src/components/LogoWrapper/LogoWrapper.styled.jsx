import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  position: absolute;
  top: 24px;
  left: 20px;

  @media (min-width: 768px) {
    top: 32px;
    left: 32px;
  }

  @media (min-width: 1440px) {
    top: 32px;
    left: 96px;
  }
`;
