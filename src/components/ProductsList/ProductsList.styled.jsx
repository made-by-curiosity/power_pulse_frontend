import styled from '@emotion/styled';

export const ProductsContainer = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      #ef8964 0%,
      #ef8964 30%,
      #ef8964 50%,
      #ef8964 70%,
      #ef8964 100%
    );
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;

export const ProductsItem = styled.li`
  width: 335px;
  height: 141px;
  border-radius: 12px;
  border: ${props => props.theme.colors.todoBorder};
  padding: 16px 16px;
  @media (min-width: 1440px) {
    width: 405px;
  }
`;

export const RadCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${props => props.theme.colors.redCircleBg};
  margin-right: 8px;
  margin-left: auto;
`;

export const GreenCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${props => props.theme.colors.greenCircleBg};
  margin-right: 8px;
  margin-left: auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`;

export const DietTitle = styled.h3`
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${props => props.theme.colors.dietTitleColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Recommend = styled.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primaryTitleColor};
`;

export const CaloriesIcon = styled.svg`
  background-color: ${props => props.theme.colors.iconBgColor};
  padding: 4px;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const MenuTitle = styled.h2`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.primaryTitleColor};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  width: 250px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`;

export const DataInfo = styled.ul`
  display: flex;
  & li {
    margin-right: 8px;
    color: ${props => props.theme.colors.textSecondColor};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    @media screen and (min-width: 768px) {
      margin-right: 16px;
    }
    & span {
      color: ${props => props.theme.colors.primaryTitleColor};
      margin-left: 4px;
    }
  }
`;

export const AddIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const AddProduct = styled.span`
  color: ${props => props.theme.colors.backgroundContentColor};
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BtnAddProduct = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;
