import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const LogoutButton = styled.button`
  margin-left: auto;
  margin-top: 41px;
  padding: 6px;

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

  ${mq[1]} {
    margin-top: 32px;
    margin-bottom: 38px;
  }

  ${mq[2]} {
    ${'' /* margin-top: 32px; */}
    margin-bottom: 0px;
  }
`;

export const LogoutBtnText = styled.span`
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;

  ${mq[1]} {
    font-size: 16px;
    line-height: 1.5;
  }
`;
