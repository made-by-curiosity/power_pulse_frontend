import ico from '../../assets/icons/svg-sprite.svg';
import { TrashBtn, TrashSvg } from './DeleteBtn.styled';

export const DeleteBtn = ({ id, handleDelete }) => {
  const handleClick = () => {
    handleDelete(id);
  };

  return (
    <TrashBtn onClick={handleClick}>
      <TrashSvg>
        <use href={ico + `#icon-trashtrue`}></use>
      </TrashSvg>
    </TrashBtn>
  );
};
