import { AvatarWrapper, UserName, UserTitle } from './Avatar.styled';
import icons from '../../../assets/icons/svg-sprite.svg';

const iconUser = (
  <svg width="60" height="60">
    <use href={icons + '#icon-user'}></use>
  </svg>
);

export const Avatar = () => {
  return (
    <>
      <AvatarWrapper>{iconUser}</AvatarWrapper>
      <UserName>Anna Rybachok</UserName>
      <UserTitle>User</UserTitle>
    </>
  );
};
