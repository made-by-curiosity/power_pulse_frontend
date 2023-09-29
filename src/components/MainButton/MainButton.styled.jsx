import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const Btn = styled.button`
  @media screen and (max-width: 374px) {
    ${props => props.btn320Styles}
  }

  cursor: pointer;

  padding: ${({ modalButton, filled }) =>
    modalButton ? (filled ? '12px 32px' : '12px 36px') : '12px 40px'};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  color: ${props => props.theme.colors.primaryTitleColor};

  background-color: ${props => (props.filled ? props.theme.colors.backgroundContentColor : 'transparent')};

  border: 1px solid;
  border-color: ${props =>
    props.filled ? props.theme.colors.activeSignInBorder : props.theme.colors.searchProductBorder};
  border-radius: 12px;

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: ${props => (props.filled ? props.theme.colors.activeSignUpBgColor : 'transparent')};
    border-color: ${props => (props.filled ? props.theme.colors.activeSignUpBgColor : props.theme.colors.inputBorderHover)};
  }

  &:disabled {
    color: ${props => props.theme.colors.textPlaceholderColor};
  }

  ${props => props.btnStyles}

  ${mq[1]} {
    padding: 16px 60px;
    padding: ${({ modalButton, filled }) =>
      modalButton ? (filled ? '14px 32px' : '14px 40px') : '16px 60px'};

    font-size: ${({ modalButton, filled }) =>
      modalButton && filled ? '16px' : '20px'};
    line-height: ${({ modalButton, filled }) =>
      modalButton && filled ? '1.5' : '1.2'};
  }
`;
