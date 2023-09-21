import icons from '../../../../assets/icons/svg-sprite.svg';
import { SettingsBtnSvg } from './SettingsButton.styled';

export const SettingButton = () => {
  return (
    <SettingsBtnSvg>
      <use href={icons + '#icon-settings'}></use>
    </SettingsBtnSvg>
  );
};
