import icons from '../../../assets/icons/svg-sprite.svg';

export const SettingButton = () => {
  return (
    <svg
      style={{
        width: 24,
        height: 24,
        opacity: '30%',
      }}
    >
      <use href={icons + '#icon-settings'}></use>
    </svg>
  );
};
