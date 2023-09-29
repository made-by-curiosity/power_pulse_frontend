import PropTypes from 'prop-types';
import { LoadingCont, LoadingWrapper } from './Loading.styled';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';

export const Loading = ({ text }) => {
  return (
    <LoadingWrapper>
      <LoadingCont>
        <LoadingSpinner />
      </LoadingCont>
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};
