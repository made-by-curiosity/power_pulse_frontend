import { useEffect, useState } from 'react';
import {
  LoadingCont,
  LoadingWrapper,
  NotificationWrapper,
} from './Loading.styled';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';

export const Loading = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(state => !state);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <LoadingWrapper>
      <LoadingCont>
        <LoadingSpinner />
        {isShown && (
          <NotificationWrapper>
            <p>Notice. This application uses FREE hosting.</p>
            <p>
              If you're waiting too long, that means server fell asleep after 15
              minutes of inactivity. Please wait until it wakes up.
            </p>
            <p>Usually it takes from 30 to 120 seconds to wake up.</p>
          </NotificationWrapper>
        )}
      </LoadingCont>
    </LoadingWrapper>
  );
};
