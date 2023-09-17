import { ExampleText, ExampleWrapper } from './Example.styled';
import Button from '@mui/material/Button';
import icons from '../../assets/icons/svg-sprite.svg';

export const Example = () => {
  return (
    <ExampleWrapper>
      <Button variant="contained">Contained</Button>
      <ExampleText>Пример использования emotion стилей</ExampleText>
      <div>
        <svg width="36" height="36" fill="#2a2a2a">
          <use href={icons + '#icon-addavatar'} />
        </svg>
      </div>
    </ExampleWrapper>
  );
};
