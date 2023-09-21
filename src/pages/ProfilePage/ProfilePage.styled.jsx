import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const PageWrapper = styled.div`
  ${mq[2]} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    aline-items: flex-end;

    margin-top: 32px;
    margin-bottom: 36px;
  }
`;
