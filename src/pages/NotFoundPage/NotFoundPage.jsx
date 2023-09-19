// import { Button } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Blok, Pages, Logo, Title, Text, Foto, Img, Button } from './NotFoundPage.styled'
import mo_img from '../../assets/images/mo-img/mo_main.jpg'
const NotFoundPage = () => {
  return <Container>
    <Pages>
    <Blok>
        <Logo>
            {/* <svg width="44" height="17" >
                <use href="./images/symbol-defs.svg#icon-Vector"></use>
            </svg>
            <svg width="99" height="15" >
                <use href="./images/symbol-defs.svg#icon-PowerPulse"></use>
            </svg> */}
        </Logo>
        <Title>404</Title>
        <Text>
            Sorry, you have reached a page that we could not find.
            It seems that you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into another dimension.
            We apologize for this inconvenience.
        </Text>
        <Button type="button" class="button">Go Home</Button>
    </Blok>

    <Foto>
        <Img src={mo_img} />
    </Foto>
    </Pages>
  </Container>;
};

export default NotFoundPage;
