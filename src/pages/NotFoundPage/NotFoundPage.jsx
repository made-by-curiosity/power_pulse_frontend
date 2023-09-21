
import { Container } from 'components/Container/Container';
import { Blok, Pages, Title, Text, Button } from './NotFoundPage.styled'



const NotFoundPage = () => {
  return <Pages>
        <Container>
            <Blok>
                <Title>404</Title>
                <Text>
                Sorry, you have reached a page that we could not find.
                It seems that you are lost among the numbers and letters of our virtual space.
                Perhaps this page went on vacation or decided to disappear into another dimension.
                We apologize for this inconvenience.
                </Text>
                <Button type="button">Go Home</Button>
            </Blok>
        </Container>
    </Pages>
};

export default NotFoundPage;
