import { InfoCardBox, InfoCardLabel, InfoCardNumber } from './InfoCard.styled';

export const InfoCard = ({ label, number }) => {
  return (
    <InfoCardBox>
      <InfoCardLabel>{label}</InfoCardLabel>
      <InfoCardNumber>{number}</InfoCardNumber>
    </InfoCardBox>
  );
};
