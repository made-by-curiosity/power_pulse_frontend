import { LoadingCont, LoadingWrapper } from './Loading.styled';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';

export const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingCont>
        <LoadingSpinner />
      </LoadingCont>
    </LoadingWrapper>
  );
};
