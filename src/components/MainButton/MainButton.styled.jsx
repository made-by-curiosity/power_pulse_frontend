import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const Btn = styled.button`
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
  color: #efede8;

  background-color: ${props => (props.filled ? '#e6533c' : 'transparent')};

  border: 1px solid;
  border-color: ${props =>
    props.filled ? '#e6533c' : 'rgba(239, 237, 232, 0.30)'};
  border-radius: 12px;

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: ${props => (props.filled ? '#ef8964' : 'transparent')};
    border-color: ${props => (props.filled ? '#ef8964' : '#e6533c')};
  }

  &:disabled {
    color: rgba(239, 237, 232, 0.6);
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
