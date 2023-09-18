import { Btn } from './MainButton.styled';

export const MainButton = ({
  type,
  text,
  filled,
  disabled,
  btnStyles,
  modalButton,
  onClick,
}) => {
  return (
    <Btn
      type={type}
      filled={filled}
      disabled={disabled}
      btnStyles={btnStyles}
      modalButton={modalButton}
      onClick={onClick}
    >
      {text}
    </Btn>
  );
};
