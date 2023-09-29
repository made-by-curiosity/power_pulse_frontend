import styled from '@emotion/styled';

export const DayDashboardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 593px;
  }

  @media (min-width: 1440px) {
    max-width: 390px;
  }
`;

export const WarningCont = styled.div`
  padding-left: 32px;
  display: flex;
  gap: 8px;
  position: relative;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const WarningIMG = styled.svg`
  stroke: ${props => props.theme.colors.primaryTitleColor};
  fill: ${props => props.theme.colors.svgLineColor};
  stroke-width: 0;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const WarningText = styled.p`
  color: ${props => props.theme.colors.warningTextColor};
  font-size: 14px;
  line-height: 18px;
  max-width: 303px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 561px;
  }

  @media (min-width: 1440px) {
    max-width: 358px;
  }
`;
