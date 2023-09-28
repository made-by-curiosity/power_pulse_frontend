import styled from '@emotion/styled';

export const Modal = styled.div`
width: 335px;
height: 858px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: #10100F;
display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgGif = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`;

export const ImgDiv = styled.div`
  display: flex;
  width: 270px;
  height: 226px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.2) 0%,
    rgba(4, 4, 4, 0.2) 100%
  );
  margin-top: 48px;
  margin-bottom: 14px;

  @media(min-width: 768px) {
    margin-left: 32px;

  }
`;

export const DivTimer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(min-width: 768px){

  margin-left: 32px;
}

`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #e6533c;
  margin-top: 14px;
  outline: none;
  border: none;
  border-radius: 5px;

  @media(min-width: 768px){
    margin-left: 32px;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 4px;

  @media(min-width: 768px){
    
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 12px 80px 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const NameItem = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const ValueItem = styled.p`
  color: #efede8;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
`;

export const ListTrening = styled.ul`
  display: flex;
  width: 302px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;

 @media(min-width: 768px){
    width: 345px;
 }
`;

export const ItemDiv = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

`;

export const ItemTrening = styled.li`
  display: flex;
  width: 147px;
  height: 62px;
  justify-content: flex-start;
  padding-left: 18px;
  align-items: center;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  gap: 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  padding: 10px;

  @media(min-width: 768px) {
    width: 168px;
    height: 70px;

  }
`;

export const BurnedCaloriesDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  @media(min-width: 768px){
    margin-left: 32px;
  }
`;

export const BurnedCaloriesText = styled.p`
color: rgba(239, 237, 232, 0.30);
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;
`;

export const BurnedCaloriesNumber = styled.p`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const ButtonAdd = styled.button`
  display: inline-flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--orange, #e6533c);
  margin-right: auto;
  margin-top: 24px;

  @media(min-width: 768px){
    margin-top: 176px;
    margin-left: 200px;
    padding: 14px 32px;
  }

`;

export const SpanButton = styled.span`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const DivColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    align-items: center;
`
