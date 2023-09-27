import styled from '@emotion/styled';

export const FormField = styled.div`
  display: block;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 48px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
    margin-left: 32px;
    margin-right: 32px;
  }
`;

export const InputProductName = styled.input`
  width: 287px;
  height: 34px;
  padding-left: 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.3);
  background-color: inherit;
  border-radius: 12px;
  border: 1px solid #e6533c;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
  }
`;

export const InputProductAmount = styled.input`
  display: flex;
  justify-content: space-between;
  width: 287px;
  height: 34px;
  padding: 8px 14px 8px 14px;

  background-color: inherit;
  border-radius: 12px;
  border: 1px solid #e6533c;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`;

export const SpanNumber = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: #efede8;
`;
export const SpanGrams = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.4);
`;

export const ContainCaloriesDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const ContainCaloriesText = styled.span`
  margin-right: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
`;

export const ContainCaloriesNumber = styled.span`
  color: #efede8;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
`;

export const ModalBtns = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;
