import { useSelector } from 'react-redux';
import icons from '../../../../assets/icons/svg-sprite.svg';
import { AvatarContainer, UserBtnSvg } from './UserButton.styled';
import { selectUser } from 'redux/auth/selectors';

export const UserButton = () => {
  const userInfo = useSelector(selectUser);
  const { avatarUrls } = userInfo;

  const hasAvatar = Object.keys(avatarUrls).length > 0;

  return (
    <AvatarContainer>
      {hasAvatar ? (
        <img
          src={avatarUrls.mobile}
          alt="User's avatar"
          style={{ width: '100%', height: '100%', borderRadius: '50%' }}
        ></img>
      ) : (
        <UserBtnSvg>
          <use href={icons + '#user'}></use>
        </UserBtnSvg>
      )}
    </AvatarContainer>
  );
};
