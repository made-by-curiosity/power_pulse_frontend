import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const InputWrapper = styled.div`
  position: relative;
  width: 173px;

  ${mq[1]} {
    width: 204px;
  }
`;

export const StyledSelect = styled.select`
  appearance: none;

  & option {
    background: ${props => props.theme.colors.castomFiltrBgColor};

    color: ${props => props.theme.colors.primaryTitleColor};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28571;
  }

  width: 100%;
  padding: 14px;

  border-radius: 12px;
  border: ${props => props.theme.colors.searchProductBorder};
  background: none;
  outline: none;

  color: ${props => props.theme.colors.primaryTitleColor};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.filterHoverBorder};
  }

  ${mq[1]} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IconChevron = styled.svg`
  width: 18px;
  height: 18px;

  stroke-width: 2px;
  stroke: ${props => props.theme.colors.primaryTitleColor};
`;

export const ButtonShevron = styled.button`
  position: absolute;

  right: 14px;
  transform: translateY(75%);

  margin: 0;
  padding: 0;
  border: none;
  line-height: 0;
  background: none;
  cursor: pointer;

  ${mq[1]} {
    transform: translateY(100%);
  }
`;
