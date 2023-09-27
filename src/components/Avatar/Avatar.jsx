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
    <use href={icons + '#user'}></use>
  </IconUser>
);

const iconAddAvatarBtn = (
  <AddAvatarIcon>
    <use href={icons + '#icon-addavatar'}></use>
  </AddAvatarIcon>
);

export const Avatar = ({ name, avatarUrls = iconUser }) => {
  const tablet = useMediaQuery('(min-width:768px)');
  const hasAvatar = Object.keys(avatarUrls).length > 0;

  const filePicker = useRef(null);

  const dispatch = useDispatch();

  const handleAddAvatar = e => {
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
        {hasAvatar ? (
          <img
            src={tablet ? avatarUrls.desktop : avatarUrls.mobile}
            alt="User's avatar"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          ></img>
        ) : (
          iconUser
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
