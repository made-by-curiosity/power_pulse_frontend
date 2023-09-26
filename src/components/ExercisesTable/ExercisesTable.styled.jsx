import styled from '@emotion/styled';

export const TitleColumn = styled.span`
  color: #ef8964;
  font-size: 12px;
  line-height: 18px;
  position: absolute;
  left: 0;
  top: -26px;
  display: block;
  width: 80px;
  overflow: hidden;
  height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;

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
      white-space: nowrap;
      width: 53px;
      margin-right: 45px;
    }
    &:nth-of-type(2) {
      margin-right: 82px;
    }
    &:nth-of-type(3) {
      margin-right: 100px;
    }
    &:nth-of-type(4) {
      margin-right: 56px;
    }
    &:nth-of-type(5) {
      margin-right: 8px;
      width: 78px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  @media (min-width: 1440px) {
    &:nth-of-type(1) {
      margin-right: 70px;
    }
    &:nth-of-type(2) {
      margin-right: 107px;
    }
    &:nth-of-type(3) {
      margin-right: 104px;
    }
    &:nth-of-type(4) {
      margin-right: 78px;
    }
    &:nth-of-type(5) {
      margin-right: 20px;
      overflow: revert;
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
  white-space: nowrap;
  text-overflow: ellipsis;
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
    width: 297px;
    height: 38px;
    margin-bottom: 42px;
  }
  &:nth-of-type(4) {
    width: 81px;
    height: 38px;
    margin-right: 16px;
  }
  &:nth-of-type(5) {
    width: 80px;
    height: 38px;
    margin-right: 16px;
  }
  &:nth-of-type(6) {
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
      width: 90px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(2) {
      width: 132px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(3) {
      width: 128px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(4) {
      width: 84px;
      margin-right: 8px;
    }
    &:nth-of-type(5) {
      width: 78px;
      margin-right: 8px;
    }
    &:nth-of-type(6) {
      width: 72px;
      margin-right: 12px;
    }
  }

  @media (min-width: 1440px) {
    &:nth-of-type(1) {
      width: 115px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(2) {
      width: 157px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(3) {
      width: 131px;
      margin-bottom: 0px;
      margin-right: 8px;
    }
    &:nth-of-type(4) {
      width: 106px;
      margin-right: 8px;
    }
    &:nth-of-type(5) {
      width: 91px;
      margin-right: 8px;
    }
    &:nth-of-type(6) {
      width: 82px;
      margin-right: 20px;
    }
    /* &:nth-of-type(7) {
      width: 100px;
    } */
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
