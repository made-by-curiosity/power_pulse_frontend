import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;