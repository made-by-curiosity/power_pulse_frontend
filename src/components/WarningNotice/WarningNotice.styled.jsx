import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const WarningNoticeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
  align-items: flex-start;

  ${mq[1]} {
    margin-top: 32px;
  }
`;

export const WarningText = styled.div`
  width: 303px;

  color: ${props => props.theme.colors.warningTextColor};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;

  ${mq[1]} {
    width: 407px;
    font-size: 16px;
    line-height: 1.5;
  }
`;
