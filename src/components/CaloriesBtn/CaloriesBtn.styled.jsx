import styled from '@emotion/styled';

export const Calories = styled.button`
  border-radius: 12px;
  border: none;
  padding: 0;
  position: absolute;
  top: 696px;
  right: 20px;
  width: 119px;
  height: 76px;
  background: #ef8964;
  

  @media screen and (min-width: 768px) {
    top: 866px;
    right: 32px;
    width: 180px;
    height: 110px;
  }
  @media screen and (min-width: 1440px) {
    top: 671px;
    right: 32px;
  }
`;

export const CaloriesInfo = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 18px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 28px;
  }
`;

export const SpanNumb = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 24px;
  text-transform: uppercase;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 50px;
  }
`;

export const SpanCal = styled.span`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-left: 11px;
  }
`;

export const CaloriesIcon = styled.svg`
  display: block;
  margin-left: 18px;
  margin-top: 14px;
  margin-bottom: 8px;
  background-color: #efa082;
  padding: 4px;
  border-radius: 50px;
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: 28px;
  }
`;
