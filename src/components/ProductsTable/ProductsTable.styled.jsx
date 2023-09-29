import styled from '@emotion/styled';

export const TitleColumn = styled.span`
  color: #ef8964;
  font-size: 12px;
  line-height: 18px;
  position: absolute;
  left: 0;
  top: -26px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TitleHead = styled.thead`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const RowTel = styled.tr`
  display: flex;
  margin-bottom: 66px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`;

export const Headers = styled.tr`
  @media (min-width: 768px) {
    display: flex;
    color: #ef8964;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 8px;
  }
`;
export const HeadersTitle = styled.th`
  @media (min-width: 768px) {
    font-weight: 400;
    &:nth-of-type(1) {
      margin-right: 186px;
    }
    &:nth-of-type(2) {
      margin-right: 87px;
    }
    &:nth-of-type(3) {
      margin-right: 52px;
    }
    &:nth-of-type(4) {
      margin-right: 59px;
    }
  }
  @media (min-width: 1440px) {
    &:nth-of-type(1) {
      margin-right: 193px;
    }
    &:nth-of-type(2) {
      margin-right: 124px;
    }
    &:nth-of-type(3) {
      margin-right: 70px;
    }
    &:nth-of-type(4) {
      margin-right: 75px;
    }
  }
`;

export const CellTel = styled.td`
  padding: 10px 14px 10px 14px;
  border-radius: 12px;
  border: 1px solid #efede84d;
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  position: relative;

  & span[data-crop='crop'] {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:nth-of-type(1) {
    width: 297px;
    height: 38px;
    margin-bottom: 42px;
  }
  &:nth-of-type(2) {
    width: 297px;
    height: 38px;
    margin-bottom: 42px;
  }
  &:nth-of-type(3) {
    width: 81px;
    height: 38px;
    margin-right: 16px;
  }
  &:nth-of-type(4) {
    width: 80px;
    height: 38px;
    margin-right: 16px;
  }
  &:nth-of-type(5) {
    width: 76px;
    height: 38px;
    margin-right: 6px;
  }

  @media (min-width: 768px) {
    padding: 8px 14px 8px 14px;
    font-size: 16px;
    line-height: 24px;
    height: 40px;
    display: flex;
    align-items: center;
    &:nth-of-type(1) {
      width: 204px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(2) {
      width: 128px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(3) {
      width: 90px;
      margin-right: 8px;
    }
    &:nth-of-type(4) {
      width: 90px;
      margin-right: 8px;
    }
    &:nth-of-type(5) {
      width: 80px;
      margin-right: 12px;
    }
  }

  @media (min-width: 1440px) {
    &:nth-of-type(1) {
      width: 212px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(2) {
      width: 166px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(3) {
      width: 105px;
      margin-right: 8px;
    }
    &:nth-of-type(4) {
      width: 105px;
      margin-right: 8px;
    }
    &:nth-of-type(5) {
      width: 110px;
      margin-right: 12px;
    }
  }
`;

export const SvgStyle = styled.svg`
  width: 20px;
  height: 20px;
  fill: red;
`;

export const SvgTd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecYes = styled.div`
  width: 14px;
  height: 14px;
  background-color: #419b09;
  border-radius: 50%;
  margin-right: 8px;
`;

export const RecNo = styled.div`
  width: 14px;
  height: 14px;
  background-color: #e9101d;
  border-radius: 50%;
  margin-right: 8px;
`;
