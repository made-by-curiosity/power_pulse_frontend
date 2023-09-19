import styled from '@emotion/styled';

export const LogoutButton = styled.button`
  margin-left: auto;
  margin-top: 41px;
  padding: 6px;
  margin-bottom: 12px;

  display: flex;
  justify-content: center;
  alight-items: center;
  gap: 8px;

  background: none;
  border: none;
  cursor: pointer;

  transition-property: transform;

  &:hover {
    transform: scale(1.2);
    transition-duration: 400ms;
  }
`;

export const LogoutBtnText = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;
`;
