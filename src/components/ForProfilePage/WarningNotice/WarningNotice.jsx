import { WarningNoticeWrapper, WarningText } from './WarningNotice.styled';
import icons from '../../../assets/icons/svg-sprite.svg';

const icon = (
  <svg width="24" height="24">
    <use href={icons + '#icon-warning'}></use>
  </svg>
);

const text =
  'We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.';

export const WarningNotice = () => {
  return (
    <WarningNoticeWrapper>
      {icon}
      <WarningText>{text}</WarningText>
    </WarningNoticeWrapper>
  );
};
