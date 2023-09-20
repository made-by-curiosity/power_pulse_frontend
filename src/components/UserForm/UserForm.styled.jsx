import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const Title = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  ${mq[1]} {
    font-size: 14px;
    line-height: 1.28571;
    margin-bottom: 8px;
  }
`;

export const UserBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;

  ${mq[1]} {
    gap: none;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`;

export const UserOtherInfoWrapper = styled.div`
  display: flex;
  ${'' /* flex-direction: row; */}
  flex-wrap: wrap;
  flex-basis: auto;
  gap: 14px;
  margin-bottom: 14px;

  ${mq[1]} {
    gap: none;
    justify-content: space-between;
  }
`;
