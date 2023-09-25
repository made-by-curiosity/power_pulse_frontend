
import { StyledLink } from './BackLink.styled';

import icons from '../../assets/icons/svg-sprite.svg';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <svg width="20" height="20" stroke="#E6533C">
              <use href={icons + '#icon-back'} />
      </svg>
      {children}
    </StyledLink>
  );
};
