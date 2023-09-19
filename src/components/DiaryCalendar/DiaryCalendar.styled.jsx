import styled from '@emotion/styled';

export const TitleWrapper = styled.button`
  display: flex;
  color: #efede8;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 0;
  gap: 8px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const CalendarIMG = styled.svg`
  stroke: #ef8964;
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const DateSwitcherCont = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

export const DateSwitcherBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 0;
  cursor: pointer;
  transform: rotate(270deg);

  svg {
    stroke: ${({ color }) => color};
  }

  :last-of-type {
    transform: rotate(90deg);

    svg {
      stroke: #efede8;
    }
  }
`;

export const DateSwitcherBtnCont = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
