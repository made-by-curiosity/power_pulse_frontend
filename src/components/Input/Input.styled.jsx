import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const Container = styled.div``;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  color: #efede899;
  font-family: 'Roboto sans-serif';
  font-size: 14px;
  line-height: 1.3;
  top: ${props => (props.isFocused || props.hasValue ? '-50%' : '25%')};
  left: 14px;
  transition: top 0.2s ease-out;

  ${mq[1]} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const StyledInput = styled.input`
  padding: 14px;
  outline: none;
  border-radius: 14px;
  border-width: 1px;
  border-color: #efede84d;
  color: #efede899;
  background-color: #ffffff00;
  width: 100%;

  &:hover {
    border-color: #e6533c;
  }

  ${props =>
    props.className.includes('valid') &&
    `
    border-color: #3CBF61; 
  `}

  ${props =>
    props.className.includes('invalid') &&
    `
    border-color: #D80027; 
  `}
`;

export const InputMessage = styled.div`
  font-family: 'Roboto sans-serif';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  ${props =>
    props.className.includes('valid') &&
    `
    color: #3CBF61; 
  `}

  ${props =>
    props.className.includes('invalid') &&
    `
    color: #D80027; 
  `}
`;
