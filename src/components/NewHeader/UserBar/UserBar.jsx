import { Link } from 'react-router-dom';
import { SettingButton } from './SettingsButton/SettingsButton';
import { UserButton } from './UserButton/UserButton';
import { BurgerButton } from './BurgerButton/BurgerButton';
import { LogoutButton } from './LogoutButton/LogoutButton';
import { UserPart } from './UserBar.styled';

export const UserBar = ({ onBurgerButton }) => {
  return (
    <UserPart>
      <Link>
        <SettingButton />
      </Link>
      <Link>
        <UserButton />
      </Link>
      <BurgerButton onClick={onBurgerButton} />
      <LogoutButton />
    </UserPart>
  );
};
