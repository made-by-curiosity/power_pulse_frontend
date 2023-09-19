import { DateSwitcherBtn } from "./DateSwitchButton.styled";
import sprite from '../../assets/icons/svg-sprite.svg';

export const DateSwitchButton = ({ onClick, disabled, color, icon }) => {
  return (
    <DateSwitcherBtn
      type="button"
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      <svg width="16" height="16">
        <use href={sprite + icon}></use>
      </svg>
    </DateSwitcherBtn>
  );
};