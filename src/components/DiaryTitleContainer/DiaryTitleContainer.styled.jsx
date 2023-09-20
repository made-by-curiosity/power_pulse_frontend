import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-top: 52px;
    min-height: 116px;
    align-items: flex-start;

    h1 {
      align-self: flex-end;
    }
  }
`;
