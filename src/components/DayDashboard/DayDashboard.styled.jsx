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

export const WarningIMGWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ef8964;
  border-radius: 50%;

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const WarningIMG = styled.svg`
  stroke: #efede8;
`;

export const WarningText = styled.p`
  color: rgba(239, 237, 232, 0.3);
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
