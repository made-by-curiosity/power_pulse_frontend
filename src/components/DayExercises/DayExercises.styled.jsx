import styled from '@emotion/styled';

export const ProductWrapper = styled.div`
  border: 1px solid #efede820;
  border-radius: 12px;
  margin-bottom: 40px;
  padding: 16px;
  width: 100%;
  min-height: 335px;
  max-height: 824px;
  overflow: auto;

  background-color: #efede80d;
  @media (min-width: 768px) {
    min-height: auto;
    max-height: auto;
    height: 234px;
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 826px;
  }
`;

export const TitleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const TitleP = styled.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`;

export const WrapperA = styled.div`
  &:hover span {
    color: #efede8;
  }
`;

export const NavP = styled.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SvgStyle = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const NotProduct = styled.p`
  color: #efede84d;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 125px;
  @media (min-width: 768px) {
    margin-top: 65px;
    font-size: 16px;
    line-height: 24px;
  }
`;
