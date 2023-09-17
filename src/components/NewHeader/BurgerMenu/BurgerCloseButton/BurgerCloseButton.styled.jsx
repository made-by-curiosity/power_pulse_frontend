import styled from '@emotion/styled';

export const BurgerCloseBtn = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000000;

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;
