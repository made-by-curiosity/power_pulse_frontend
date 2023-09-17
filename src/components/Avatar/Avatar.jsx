import {
  AvatarWrapper,
  UserName,
  UserTitle,
  AddAvatarBtn,
  AddAvatarIcon,
} from './Avatar.styled';
import icons from '../../assets/icons/svg-sprite.svg';

const iconUser = (
  <svg width="62" height="62">
    <use href={icons + '#icon-user'}></use>
  </svg>
);

const iconAddAvatarBtn = (
  <AddAvatarIcon>
    <use href={icons + '#icon-addavatar'}></use>
  </AddAvatarIcon>
);

export const Avatar = ({ name, email, avatar = iconUser }) => {
  return (
    <>
      <AvatarWrapper>
        <AddAvatarBtn type="button">{iconAddAvatarBtn}</AddAvatarBtn>
        {avatar}
      </AvatarWrapper>
      <UserName>{name}</UserName>
      <UserTitle>User</UserTitle>
    </>
  );
};
