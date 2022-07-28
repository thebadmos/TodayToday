import React from 'react'
import '../../styles/screen.css'
import {
    OtherButton,
  Button1,
  Container,
  FormContainer,
  OverlayContainer,
  Main
} from "../../styles/styledElements";
import Logo from "../Logo/Logo";
import { Link} from 'react-router-dom';

function EmailActivate() {
  return (
    <>
    <Main>
    <Container>
        <FormContainer id="sign-in-container">
      <form action="#">
      <Logo/>
        <h6>Hi There!</h6>
        <p>Welcome back to your No 1 Classified Online Market</p>
      <p id='pText'>A Link has been sent to your E-Mail Address to activate your
Account.</p>
       
         
           <OtherButton className="forgotPasswordBtn">Go To Login</OtherButton>
         
      </form>
  </FormContainer>
  <OverlayContainer>
      <div class="overlay">
      <div class="overlay-panel overlay-right">
      <img src="/assets/dfdf.jpg" id="imgBxForgot" />
        </div>
      </div>
    </OverlayContainer>
  </Container>
  </Main>
 
  </>
  )
}

export default EmailActivate