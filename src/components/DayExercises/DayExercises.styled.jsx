import styled from '@emotion/styled';

export const ProductWrapper = styled.div`
  border:  ${props => props.theme.colors.productBorder};
  border-radius: 12px;
  margin-bottom: 40px;
  padding: 16px;
  width: 100%;
  min-height: 335px;
  max-height: 824px;
  overflow: auto;

  background-color: ${props => props.theme.colors.productBgColor};
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
  color: ${props => props.theme.colors.productTitleColor};
  font-size: 14px;
  line-height: 18px;
`;

export const WrapperA = styled.div`
  &:hover span {
    color: ${props => props.theme.colors.primaryTitleColor};
  }
`;

export const NavP = styled.span`
  color: ${props => props.theme.colors.backgroundContentColor};
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
  color: ${props => props.theme.colors.formTextColor};
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
