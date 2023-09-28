import styled from '@emotion/styled';

export const AppBar = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${props => (props.showHeader ? '#040404' : 'transparent')};
  top: 0;
  overflow: hidden;
  z-index: 100;
`;

export const NavWrapper = styled.div`
  ${props => !props.showHeader && 'height: 36px;'}

  display: flex;
  justify-content: space-between;

  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: 768px) {
    ${props => !props.showHeader && 'height: 40px;'}
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const FixedHeader = styled.div`
  ${props =>
    props.showHeader && 'border-bottom: 1px solid rgba(239, 237, 232, 0.2);'}
`;

export const HeaderContainer = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 12px 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 19px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 19px 96px;
  }
`;
