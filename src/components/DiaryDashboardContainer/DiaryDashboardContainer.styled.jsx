import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 40px;
  gap: 40px;

  @media (min-width: 768px) {
    padding-top: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
  }

  @media (min-width: 1440px) {
    padding-top: 32px;
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;
