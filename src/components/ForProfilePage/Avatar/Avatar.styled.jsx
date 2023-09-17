import styled from '@emotion/styled';

export const AvatarWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: 0px auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border: 1px solid #e6533c;
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  width: auto;
  height: 62px;
  border: 1px solid yellow;
`;

export const UserName = styled.h2`
  margin-top: 31px;
  text-align: center;

  color: #efede8;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.11111;
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
`;

export const AddAvatarBtn = styled.button`
  position: absolute;
  bottom: 0;
  translate: 0 +50%;

  border: none;
  background: none;
  cursor: pointer;

  ${
    '' /* &:hover {
    background-color: white;
  } */
  }
`;

export const AddAvatarIcon = styled.svg`
  width: 24px;
  height: 24px;
  transition-property: transform;

  &:hover {
    transform: scale(1.2);
    transition-duration: 400ms;
  }
`;
