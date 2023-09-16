import styled from '@emotion/styled';

export const AvatarWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: 0px auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #e6533c;
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  width: auto;
  height: 62px;
  border: 1px solid yellow;
`;

export const UserName = styled.h2`
  ${'' /* display: block; */}
  margin: 0px auto;
  margin-top: 31px;
  text-aline: center;

  color: #efede8;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.11111;
`;

export const UserTitle = styled.h3`
  margin-top: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;
`;
