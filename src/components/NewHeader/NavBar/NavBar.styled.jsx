import styled from '@emotion/styled';

export const NavigationBar = styled.nav`
  display: none;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;

  font-size: 14px;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const HeaderLink = styled.div`
  display: flex;
  padding: 10px 27px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  line-height: 22px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  color: #efede8;
  transition: background linear 200ms, border linear 200ms;

  &:hover,
  &:active {
    background: #e6533c;
    border: 1px solid #e6533c;
  }
`;
