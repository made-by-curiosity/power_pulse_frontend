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
  margin-bottom: 16px;

  ${mq[1]} {
    font-size: 14px;
    line-height: 1.28571;
    margin-bottom: 18px;
  }
`;

export const UserFormWrapper = styled.div`
  ${mq[0]} {
    margin-bottom: 66px;
  }

  ${mq[1]} {
    margin-bottom: 54px;
  }

  ${mq[2]} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 0px;
  }
`;

export const UserBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
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
  flex-direction: column;
  ${'' /* flex-wrap: wrap; */}
  gap: 36px;
  ${'' /* justify-content: space-between; */}

  margin-bottom: 20px;

  ${mq[1]} {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;

    margin-bottom: 16px;
  }

  ${mq[2]} {
    gap: 14px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${'' /* flex-wrap: wrap; */}
  gap: 14px;
  justify-content: space-between;

  ${'' /* margin-bottom: 14px; */}

  ${mq[1]} {
    gap: 20px;
    justify-content: space-between;
  }
`;

export const RadioGroupWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  ${mq[1]} {
    gap: 32px;
    justify-content: flex-start;
    margin-bottom: 16px;
  }
`;

export const BloodWrap = styled.div`
  ${'' /* margin-right: 0px; */}
`;

export const GenderWrap = styled.div``;

export const LevelWrap = styled.div`
  margin-bottom: 24px;
`;
