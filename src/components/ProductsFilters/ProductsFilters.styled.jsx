import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const ProductsFilterWrapper = styled.div`
  ${mq[1]} {
    display: flex;
    gap: 16px;
  }
`;

export const FilterInnerWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  ${mq[1]} {
    margin-top: 0px;
  }
`;
