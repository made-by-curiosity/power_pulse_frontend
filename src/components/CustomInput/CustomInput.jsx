import { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Container,
  InputWrapper,
  Label,
  StyledInput,
  InputMessage,
  ShowPasswordBtn,
} from './CustomInput.styled';
import icons from '../../assets/icons/svg-sprite.svg';

export const CustomInput = ({
  field,
  form,
  reference,
  onClick,
  valueDate,
  readOnly,
  ...props
}) => {
  const {
    type,
    label = '',
    successFeedback = true,
    passwordBtn = false,
    autoComplete = 'on',
    inputStyles = {},
  } = props;
  const { name, value, onBlur } = field;
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const errorMessage = form.errors[name];
  const touched = form.touched[name];

  const hasValue = value.toString().trim().length > 0;

  const showFeedback = (!!isFocused && hasValue) || touched;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = e => {
    onBlur(e);
    setIsFocused(false);
  };

  const showPassword = () => {
    setIsPasswordShown(isPasswordShown => !isPasswordShown);
  };

  return (
    <Container>
      <InputWrapper>
        <Label htmlFor={name} isFocused={isFocused} hasValue={!!value}>
          {label}
        </Label>
        <StyledInput
          {...field}
          id={name}
          ref={reference}
          type={isPasswordShown ? 'text' : type}
          autoComplete={autoComplete}
          className={`${
            showFeedback
              ? errorMessage
                ? 'invalid'
                : successFeedback && 'valid'
              : ''
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={onClick}
          inputStyles={inputStyles}
          readOnly={readOnly}
        />
        {passwordBtn && (
          <ShowPasswordBtn type="button" onClick={showPassword}>
            <svg width={20} height={20}>
              <use
                href={`${icons}${
                  isPasswordShown ? '#icon-eyeoff' : '#icon-eye'
                }`}
              />
            </svg>
          </ShowPasswordBtn>
        )}
      </InputWrapper>
      {showFeedback && (
        <InputMessage
          aria-live="polite"
          className={`${errorMessage ? 'invalid' : successFeedback && 'valid'}`}
        >
          <svg width={13} height={13}>
            <use href={`${icons}#icon-success`} />
          </svg>
          {errorMessage
            ? errorMessage
            : successFeedback && `Success ${label.toLowerCase()}`}
        </InputMessage>
      )}
    </Container>
  );
};

// CustomInput.propTypes = {
//   label: PropTypes.string,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   className: PropTypes.string,
// };
