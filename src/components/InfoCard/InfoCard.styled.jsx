import styled from '@emotion/styled';

export const InfoCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 40px;
`;

export const InfoCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 157px;
  height: 96px;
  padding: 10px;
  justify-content: space-between;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #e6533c;
`;

export const InfoCardLabelWrapper = styled.div`
  display: flex;
  ${'' /* justify-content: space-between; */}
  align-items: center;
  gap: 6px;
`;

export const InfoCardLabel = styled.p`
  color: rgba(239, 237, 232, 0.8);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33333;
`;

export const InfoCardNumber = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11111;
`;
