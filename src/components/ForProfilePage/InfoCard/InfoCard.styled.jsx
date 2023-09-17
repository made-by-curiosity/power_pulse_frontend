import styled from '@emotion/styled';

export const InfoCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const InfoCardBox = styled.div`
  display: flex;
  width: 157px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 32px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #e6533c;
`;

export const InfoCardLabel = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33333;
`;

export const InfoCardNumber = styled.p`
  color: #efede8;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11111;
`;
