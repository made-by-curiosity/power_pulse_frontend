import icons from '../../assets/icons/svg-sprite.svg';
import { Button, SpanGoogle, SvgGoogle } from './ButtonGoogle.styled';

export const ButtonGoogle = ({ children, handleClick }) => {
  return (
    <Button type="button" onClick={handleClick}>
      <SvgGoogle>
        <use href={icons + '#icon-google'}></use>
      </SvgGoogle>
      <SpanGoogle>{children}</SpanGoogle>
    </Button>
  );
};
