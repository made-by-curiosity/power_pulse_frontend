import {
  InfoCardBox,
  InfoCardLabel,
  InfoCardNumber,
  InfoCardLabelWrapper,
} from './InfoCard.styled';

import iconsPath from '../../assets/icons/svg-sprite.svg';

export const InfoCard = ({ icon, label, number }) => {
  return (
    <InfoCardBox>
      <InfoCardLabelWrapper>
        <svg width="20" height="20" style={{ fill: '#EF8964' }}>
          <use href={iconsPath + icon}></use>
        </svg>
        <InfoCardLabel>{label}</InfoCardLabel>
      </InfoCardLabelWrapper>
      <InfoCardNumber>{number}</InfoCardNumber>
    </InfoCardBox>
  );
};
