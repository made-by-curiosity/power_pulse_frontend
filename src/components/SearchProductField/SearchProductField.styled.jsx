import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const InputWrapper = styled.div`
  position: relative;
  width: 335px;

  ${mq[1]} {
    width: 236px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: none;
  outline: none;

  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;

  &:hover,
  &:focus {
    border-color: #e6533c;
  }

  ${mq[1]} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IconSearch = styled.svg`
  width: 18px;
  height: 18px;

  stroke-width: 1.5px;
  stroke: #efede8;
`;

export const IconCancel = styled.svg`
  width: 18px;
  height: 18px;

  stroke-width: 2px;
  stroke: #e6533c;
`;

export const ButtonCancel = styled.button`
  position: absolute;

  right: 40px;
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

export const ButtonSearch = styled.button`
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
