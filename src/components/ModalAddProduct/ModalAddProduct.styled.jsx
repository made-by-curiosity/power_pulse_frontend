import styled from '@emotion/styled';

export const FormField = styled.form`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`;

export const InputProductName = styled.input`
  width: 287px;
  height: 34px;
  margin-bottom: 6px;
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

  @media screen and (max-width: 374px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
    margin-bottom: 0px;
  }
`;

export const InputProductAmount = styled.input`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  width: 287px;
  height: 34px;
  padding: 8px 14px 8px 14px;

  background-color: inherit;
  border-radius: 12px;
  border: 1px solid #e6533c;
  outline: none;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: #efede8;

  @media screen and (max-width: 374px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`;

export const ContainCaloriesDiv = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 16px;

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

export const AmountWrapper = styled.div`
  position: relative;
`;

export const ModalBtns = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: start;

    gap: 16px;
  }
`;

export const LabelGrams = styled.label`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (max-width: 374px) {
  }

  @media screen and (min-width: 768px) {
    top: 13px;
    right: 14px;
  }
`;
