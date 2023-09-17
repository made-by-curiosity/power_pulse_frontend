import {
  AvatarWrapper,
  UserName,
  UserTitle,
  AddAvatarBtn,
  AddAvatarIcon,
} from './Avatar.styled';
import icons from '../../../assets/icons/svg-sprite.svg';

const iconUser = (
  <svg width="60" height="60">
    <use href={icons + '#icon-user'}></use>
  </svg>
);

const iconAddAvatarBtn = (
  <AddAvatarIcon>
    <use href={icons + '#icon-addavatar'}></use>
  </AddAvatarIcon>
);

export const Avatar = () => {
  return (
    <>
      <AvatarWrapper>
        <AddAvatarBtn type="button">{iconAddAvatarBtn}</AddAvatarBtn>
        {iconUser}
      </AvatarWrapper>
      <UserName>Anna Rybachok</UserName>
      <UserTitle>User</UserTitle>
    </>
  );
};
