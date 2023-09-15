import PropTypes from 'prop-types';
import { LoadingWrapper } from './Loading.styled';

export const Loading = ({ text }) => {
  return (
    <LoadingWrapper>
      <p>{text}</p>
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};
