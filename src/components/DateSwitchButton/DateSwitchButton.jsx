import { DateSwitcherBtn } from "./DateSwitchButton.styled";
import sprite from '../../assets/icons/svg-sprite.svg';
import PropTypes from 'prop-types';

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

DateSwitchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.string, 
};