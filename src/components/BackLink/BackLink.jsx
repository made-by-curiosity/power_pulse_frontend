
import { StyledLink } from './BackLink.styled';

import icons from '../../assets/icons/svg-sprite.svg';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <svg width="20" height="20" stroke="rgb(239, 237, 232, 0.4)">
              <use href={icons + '#icon-back'} />
      </svg>
      {children}
    </StyledLink>
  );
};
