import icons from '../../assets/icons/svg-sprite.svg';
import { Button, SpanGoogle, SvgGoogle } from './ButtonGoogle.styled';


export const ButtonGoogle = ({children}) => {
    return (
        <Button type='button'>
            <SvgGoogle
                fill="#EFEDE8">
                  <use href={icons + '#icon-google'}></use>
              </SvgGoogle>
              <SpanGoogle>
                {children}
              </SpanGoogle>
            </Button>
    )
}