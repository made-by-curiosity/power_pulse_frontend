import styled from '@emotion/styled';

export const BurgerLogoutBtn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 20px;

  border: none;
  background-color: inherit;
  padding-left: 0;
  padding-right: 0;

  color: ${props => props.theme.colors.primaryTitleColor};
  font-family: Roboto;

  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.3;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;

    font-size: 16px;
    line-height: 24px;
  }
`;
