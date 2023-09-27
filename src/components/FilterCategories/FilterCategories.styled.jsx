import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const StyledInput = styled.input`
  width: 335px;
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
`;
