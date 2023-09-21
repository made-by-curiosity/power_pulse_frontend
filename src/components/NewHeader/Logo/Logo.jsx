import icons from '../../../assets/icons/svg-sprite.svg';
import { LogoWrapper, LogoSvg } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoSvg>
        <use href={icons + '#logo'}></use>
      </LogoSvg>
    </LogoWrapper>
  );
};
