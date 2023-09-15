import { useState } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import {
  Container,
  InputWrapper,
  Label,
  StyledInput,
  InputMessage,
} from './Input.styled';

const MyTextInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [field, meta] = useField(props);
  const showFeedback =
    (!!isFocused && field.value.trim().length > 2) || meta.touched;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = e => {
    field.onBlur(e);
    setIsFocused(false);
  };

  return (
    <Container>
      <InputWrapper>
        <Label
          htmlFor={props.id || props.name}
          isFocused={isFocused}
          hasValue={!!field.value}
        >
          {label}
        </Label>
        <StyledInput
          {...field}
          {...props}
          className={`${
            showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </InputWrapper>
      {showFeedback ? (
        <InputMessage
          id={`${props.id}-feedback`}
          aria-live="polite"
          className={`${meta.error ? 'invalid' : 'valid'}`}
        >
          {meta.error ? meta.error : `Success ${field.name}`}
        </InputMessage>
      ) : null}
    </Container>
  );
};

export default MyTextInput;

MyTextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};
