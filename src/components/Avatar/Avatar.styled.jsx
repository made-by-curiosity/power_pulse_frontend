import styled from '@emotion/styled';

const breakpoints = [320, 768, 1440];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const AvatarWrapper = styled.div`
  position: relative;

  width: 90px;
  height: 90px;
  margin: 0px auto;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #e6533c;
  border-radius: 50%;

  ${'' /* overflow: hidden; */}

  ${mq[1]} {
    width: 150px;
    height: 150px;
    margin-top: 64px;
  }

  ${mq[2]} {
    margin-top: 0px;
  }
`;

export const IconUser = styled.svg`
  width: 62px;
  height: 62px;

  ${mq[1]} {
    width: 102px;
    height: 102px;
  }
`;

export const UserName = styled.h2`
  margin-top: 32px;
  text-align: center;

  color: #efede8;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.11111;

  ${mq[1]} {
    font-size: 24px;
    line-height: 1.16667;
  }
`;

export const UserTitle = styled.h3`
  margin-top: 4px;
  text-align: center;

  color: rgba(239, 237, 232, 0.5);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;

  ${mq[1]} {
    margin-top: 8px;
  }
`;

export const AddAvatarInput = styled.input`
  position: absolute;
  bottom: 0;
  translate: 0 +50%;
  z-index: 1000;

  /*--- to hide input---*/
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const AddAvatarIcon = styled.svg`
  fill: #e6533c;
  stroke: #efede8;
  stroke-width: 0;

  width: 24px;
  height: 24px;
  transition-property: transform;

  &:hover {
    transform: scale(1.2);
    transition-duration: 400ms;
  }

  ${mq[1]} {
    width: 32px;
    height: 32px;
  }
`;

export const AvatarImg = styled.img``;

export const AddAvatarBtn = styled.button`
  position: absolute;
  bottom: 0;
  translate: 0 +50%;

  border: none;
  background: none;
  cursor: pointer;
`;
