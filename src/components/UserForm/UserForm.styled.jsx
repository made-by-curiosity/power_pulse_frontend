import styled from '@emotion/styled';

export const Title = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const UserBasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
`;

export const UserOtherInfoWrapper = styled.div`
  display: flex;
  ${'' /* flex-direction: row; */}
  flex-wrap: wrap;
  flex-basis: auto;
  gap: 14px;
  margin-bottom: 14px;
`;
