import styled from '@emotion/styled';

export const TitleColumn = styled.span`
color: #EF8964;
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
`;

export const CellTel = styled.td`
  &:nth-of-type(1) {
    width: 297px;
    height: 38px;
    padding: 10px 14px 10px 14px;
    border-radius: 12px;
    border: 1px solid #efede84d;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    position: relative;
    margin-bottom: 42px;
  }
  &:nth-of-type(2) {
    width: 297px;
    height: 38px;
    padding: 10px 14px 10px 14px;
    border-radius: 12px;
    border: 1px solid #efede84d;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    position: relative;
    margin-bottom: 42px;
  }
  &:nth-of-type(3) {
    width: 81px;
    height: 38px;
    padding: 10px 14px 10px 14px;
    border-radius: 12px;
    border: 1px solid #efede84d;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    position: relative;
    margin-right: 16px;
  }
  &:nth-of-type(4) {
    width: 80px;
    height: 38px;
    padding: 10px 14px 10px 14px;
    border-radius: 12px;
    border: 1px solid #efede84d;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    position: relative;
    margin-right: 16px;
  }
  &:nth-of-type(5) {
    width: 76px;
    height: 38px;
    padding: 10px 14px 10px 14px;
    border-radius: 12px;
    border: 1px solid #efede84d;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    position: relative;
    margin-right: 8px;
  }
  
`;
