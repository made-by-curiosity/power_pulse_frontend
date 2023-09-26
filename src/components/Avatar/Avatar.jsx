import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { updateAvatar } from 'redux/auth/operations';

import {
  AvatarWrapper,
  IconUser,
  UserName,
  UserTitle,
  AddAvatarInput,
  AddAvatarIcon,
  AddAvatarBtn,
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

export const Avatar = ({ name, avatarUrls = iconUser }) => {
  const tablet = useMediaQuery('(min-width:768px)');

  const filePicker = useRef(null);

  const dispatch = useDispatch();

  const handleAddAvatar = e => {
    // console.log(e.target.files[0]);
    let formData = new FormData();
    formData.set('avatar', e.target.files[0]);
    dispatch(updateAvatar(formData));

    e.target.value = '';
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <>
      <AvatarWrapper>
        {avatarUrls === iconUser ? (
          iconUser
        ) : (
          <img
            src={tablet ? avatarUrls.desktop : avatarUrls.mobile}
            alt="User's avatar"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          ></img>
        )}
        <AddAvatarInput
          ref={filePicker}
          type="file"
          accept="image/*,.png,.jpg,.gif,.web"
          onChange={handleAddAvatar}
        ></AddAvatarInput>
        <AddAvatarBtn type="button" onClick={handlePick}>
          {iconAddAvatarBtn}
        </AddAvatarBtn>
      </AvatarWrapper>

      <UserName>{name}</UserName>
      <UserTitle>User</UserTitle>
    </>
  );
};
