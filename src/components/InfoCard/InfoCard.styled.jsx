import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const InfoCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 40px;

  ${mq[1]} {
    gap: 16px;
    margin-top: 32px;
  }
`;

export const InfoCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 157px;
  height: 96px;
  padding: 10px;
  justify-content: space-between;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #e6533c;

  ${mq[1]} {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
  }
`;

export const InfoCardLabelWrapper = styled.div`
  display: flex;
  ${'' /* justify-content: space-between; */}
  align-items: center;
  gap: 6px;

  ${mq[1]} {
    gap: 8px;
  }
`;

export const InfoCardLabel = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33333;

  ${mq[1]} {
    line-height: 1.5;
  }
`;

export const InfoCardNumber = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11111;

  ${mq[1]} {
    font-size: 24px;
    line-height: 1.33333;
  }
`;
