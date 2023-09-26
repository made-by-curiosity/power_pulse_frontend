import {
  AvatarWrapper,
  IconUser,
  UserName,
  UserTitle,
  AddAvatarBtn,
  AddAvatarIcon,
} from './Avatar.styled';
import icons from '../../assets/icons/svg-sprite.svg';

const iconUser = (
  <IconUser>
    <use href={icons + '#icon-user'}></use>
  </IconUser>
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
        {avatar}
        <AddAvatarBtn type="button">{iconAddAvatarBtn}</AddAvatarBtn>
      </AvatarWrapper>
      <UserName>{name}</UserName>
      <UserTitle>User</UserTitle>
    </>
  );
};
