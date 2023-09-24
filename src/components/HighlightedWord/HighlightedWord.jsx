import { useEffect, useRef } from 'react';
const throttle = require('lodash.throttle');

export const HighlightedWord = ({ word, setPosition }) => {
  const wordRef = useRef();

  const getPosition = () => {
    const { left, top } = wordRef.current.getBoundingClientRect();
    setPosition({
      top,
      left,
    });
  };

  const getPositionThrottled = throttle(getPosition, 500);

  useEffect(() => {
    getPosition();
    window.addEventListener('resize', getPositionThrottled);

    return () => {
      window.removeEventListener('resize', getPositionThrottled);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={wordRef}>{word}</span>;
};
