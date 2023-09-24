import { useDispatch } from 'react-redux';

import { updateAvatar } from 'redux/auth/operations';

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

let formData = new FormData();

export const Avatar = ({ name, email, avatar = iconUser }) => {
  const dispatch = useDispatch();

  const handleAddAvatar = e => {
    // console.log(e.target.files[0]);

    formData.set('avatar', e.target.files[0]);
    dispatch(updateAvatar(formData));

    e.target.value = '';
  };

  return (
    <>
      <AvatarWrapper>
        <img src={avatar} alt="user avatar" style={{ marginBottom: 20 }}></img>

        <AddAvatarBtn
          type="file"
          accept="image/*,.png,.jpg,.gif,.web"
          onChange={handleAddAvatar}
        ></AddAvatarBtn>
      </AvatarWrapper>
      <UserName>{name}</UserName>
      <UserTitle>User</UserTitle>
    </>
  );
};
