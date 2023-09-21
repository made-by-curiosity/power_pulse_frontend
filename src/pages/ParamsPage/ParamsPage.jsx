import { Container } from 'components/Container/Container';



import { ParamsForm } from 'components/ParamsForm/ParamsForm';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';


const ParamsPage = () => {
  return <Container>
            <BackgroundImg>
              <ParamsForm/>
            </BackgroundImg>
         </Container>;
};

export default ParamsPage;
