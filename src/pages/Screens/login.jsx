import React from 'react'
import '../../styles/screen.css'
import {
  Button,
  Button1,
  Container,
  FormContainer,
  OverlayContainer,
  Main
} from "../../styles/styledElements";
import Logo from "../Logo/Logo";
import { Link} from 'react-router-dom';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <>
    <Main>
    <Container>
        <FormContainer id="sign-in-container">
      <form action="#">
      <Logo/>
        <h6>Hello Again!</h6>
        <p>Welcome back to your No 1 Classified Online Market</p>
      <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" class='mt-2'/>
           <span>Forget password?</span>
           <Button className="forgotPasswordBtn">LOGIN</Button>
           <Button1 className="googleSign">
           <FontAwesomeIcon icon={faGoogle} className='icon'/>
          Sign with Google
           </Button1>
           <Link to = "#">
             Don't have an Account? SIGNUP
             </Link>
      </form>
  </FormContainer>
  <OverlayContainer>
      <div class="overlay">
      <div class="overlay-panel overlay-right">
        <img src='/assets/1212.jpg' id="imgBx"/>
        </div>
      </div>
    </OverlayContainer>
  </Container>
 </Main>
 
  </>
  )
}

export default Login