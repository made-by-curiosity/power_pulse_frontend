import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  z-index: -1;
  top: ${props => (props.isFocused || props.hasValue ? '-16px' : '16px')};
  left: ${props => (props.isFocused || props.hasValue ? '0' : '14px')};

  font-family: 'Roboto', sans-serif;
  font-size: ${props => (props.isFocused || props.hasValue ? '10px' : '14px')};
  line-height: ${props => (props.isFocused || props.hasValue ? '1.5' : '1.29')};
  color: ${props => props.theme.colors.titleInputColor};

  transition: top 0.2s ease-out, left 0.2s ease-out;

  ${mq[1]} {
    top: ${props => (props.isFocused || props.hasValue ? '-16px' : '15px')};

    font-size: ${props =>
      props.isFocused || props.hasValue ? '12px' : '16px'};
    line-height: ${props =>
      props.isFocused || props.hasValue ? '1.29' : '1.5'};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px;

  font-size: 14px;
  line-height: 1.29;

  color: ${props => props.theme.colors.primaryTitleColor};

  background-color: inherit;

  border-radius: 12px;
  border: ${props => props.theme.colors.searchProductBorder};

  outline: none;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.btnBgColor};
    & ~ svg {
      stroke: ${props => props.theme.colors.btnBgColor};
    }
  }

  ${props =>
    props.className.includes('valid') &&
    `
    border-color: ${props => props.theme.colors.inputValidColor};
		& ~ svg {
      stroke: ${props => props.theme.colors.inputValidColor};
    }
  `}

  ${props =>
    props.className.includes('invalid') &&
    `
    border-color: ${props => props.theme.colors.inputInvalidColor};
		& ~ svg {
      stroke: ${props => props.theme.colors.inputInvalidColor};
    }
  `}

	  ${mq[1]} {
    font-size: 16px;
    line-height: 1.5;
  }

  ${props => props.inputStyles}
`;

export const InputMessage = styled.div`
  position: absolute;
  bottom: -16px;
  left: 0;

  display: flex;
  align-items: center;
  gap: 3px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;

  ${props =>
    props.className.includes('valid') &&
    `
    color:  ${props => props.theme.colors.inputValidColor};
    fill:  ${props => props.theme.colors.inputValidColor};
  `}

  ${props =>
    props.className.includes('invalid') &&
    `
    color: ${props => props.theme.colors.inputInvalidColor};
    fill: ${props => props.theme.colors.inputInvalidColor};
  `}
`;

export const ShowPasswordBtn = styled.button`
  width: 20px;
  height: 20px;

  position: absolute;
  right: 14px;
  top: 16px;

  cursor: pointer;
  border: none;
  background-color: inherit;
  padding: 0;

  & svg {
    stroke: ${props => props.theme.colors.primaryTitleColor};
  }
`;

export const CalendarIcon = styled.svg`
  width: 18px;
  height: 18px;

  position: absolute;
  right: 14px;
  top: 17px;

  stroke: ${props => props.theme.colors.primaryTitleColor};

  z-index: -1;
`;
