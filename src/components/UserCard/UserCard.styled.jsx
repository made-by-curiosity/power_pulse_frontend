import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const UserCardWrapper = styled.div`
  ${mq[2]} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 49px;

    border-left-style: solid;
    border-width: 1px;
    border-color: #efede833;
  }
`;
