import styled from '@emotion/styled';

export const UserPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  max-height: 37px;

  font-size: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    max-height: 46px;
  }
`;
