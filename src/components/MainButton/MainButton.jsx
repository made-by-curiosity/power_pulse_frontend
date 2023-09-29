import { Btn } from './MainButton.styled';

export const MainButton = ({
  type,
  text,
  filled,
  disabled,
  btnStyles,
  modalButton,
  onClick,
  btn320Styles,
}) => {
  return (
    <Btn
      type={type}
      filled={filled}
      disabled={disabled}
      btnStyles={btnStyles}
      btn320Styles={btn320Styles}
      modalButton={modalButton}
      onClick={onClick}
    >
      {text}
    </Btn>
  );
};
