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
}
`;

export const ImgGif = styled.img`
  display: flex;
  width: 270px;
  height: 226px;
  padding: 45px 105px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
`;

export const DivTimer = styled.div`
  width: 125px;
  height: 124px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  background: #e6533c;
`;

export const Svg = styled.svg`
width: 16px;
  height: 16px;
`


export const Text = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;


export const List = styled.ul`
display: flex;
padding: 12px 80px 12px 18px;
justify-content: center;
align-items: center;
gap: 32px;
`

export const NameItem = styled.p`
color: rgba(239, 237, 232, 0.40);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px;
`

export const ValueItem = styled.p`
color: #EFEDE8;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 1.28;
`

export const ListTrening = styled.ul`
display: flex;
width: 302px;
align-items: flex-start;
gap: 8px;
flex-wrap: wrap;
margin-top: 40px;
`

export const ItemDiv = styled.div`
flex-direction: column;
align-items: flex-start;
gap: 4px;
width: 49px;
`

export const ItemTrening = styled.li`
display: flex;
width:147px;
height: 62px;
padding: 12px 80px 12px 18px;
justify-content: center;
align-items: center;
gap: 32px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: rgba(239, 237, 232, 0.05);

`

export const BurnedCaloriesDiv = styled.div`
display: inline-flex;
justify-content: center;
align-items: center;
gap: 8px;
margin-top: 8px;
`

export const BurnedCaloriesText = styled.p`
Burned calories:
color: rgba(239, 237, 232, 0.30);
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;
`

export const BurnedCaloriesNumber = styled.p`
color: #E6533C;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.28;
`

export const ButtonAdd = styled.button`
display: inline-flex;
padding: 12px 32px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 12px;
background: var(--orange, #E6533C);
margin-right: auto;
margin-left: 16px;
margin-top: 24px;
`