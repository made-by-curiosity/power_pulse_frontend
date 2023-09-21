import { BackgroundImg } from "components/BackgroundImg/BackgroundImg";
import { Container } from "components/Container/Container";
import SignInForm from "components/SingInForm/SingInForm";


const SignInPage = () => {
  
  return (
    <BackgroundImg>
      <Container>
        <SignInForm/>
      </Container>
   </BackgroundImg>
  );
};

export default SignInPage;
