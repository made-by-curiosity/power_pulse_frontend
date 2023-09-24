import { Highlighter } from './WordHighlighter.styled';
import icons from '../../assets/icons/svg-sprite.svg';

export const WordHighlighter = ({ position }) => {
  return (
    <Highlighter position={position}>
      <use href={`${icons}#icon-highlighter`} />
    </Highlighter>
  );
};
