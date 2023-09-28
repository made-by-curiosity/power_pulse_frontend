import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (max-width: 767.22px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;