import icons from '../../../assets/icons/svg-sprite.svg';
import { LogoWrapper, LogoSvg } from './Logo.styled';

export const Logo = ({ is404 }) => {
  return (
    <LogoWrapper>
      <LogoSvg>
        <use href={`${icons}${is404 ? '#logo404' : '#logo'}`}></use>
      </LogoSvg>
    </LogoWrapper>
  );
};
