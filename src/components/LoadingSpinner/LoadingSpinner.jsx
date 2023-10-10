import { Hourglass } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <Hourglass
      height="80"
      width="80"
      colors={['#e6533c', '#FFDAB9']}
      ariaLabel="hourglass-loading"
      visible={true}
    />
  );
};
