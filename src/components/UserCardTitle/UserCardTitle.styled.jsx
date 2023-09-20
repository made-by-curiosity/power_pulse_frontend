import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const TitleText = styled.h1`
  margin-top: 40px;

  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16667;

  ${mq[1]} {
    margin-top: 72px;

    font-size: 32px;
    line-height: 1.375;
  }
`;
