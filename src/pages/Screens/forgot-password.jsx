import React from 'react'
import '../../styles/screen.css'
import {
  Button,
  Container,
  FormContainer,
  OverlayContainer,
  Main
} from "../../styles/styledElements";
import Logo from "../Logo/Logo";


function Forgot() {
  return (
    <>
    <Main>
    <Container>
        <FormContainer id="sign-in-container">
      <form action="#">
      <Logo/>
        <h6>Forgot Password</h6>
        <p>
            Enter the Email Address associated with your account to
            reset your password.
        </p>
      <input type="email" placeholder="todaytoday@gmail.com" />
      <Button className="forgotPasswordBtn">SEND INSTRUCTIONS</Button>
      </form>
      </FormContainer>
      <OverlayContainer>
      <div class="overlay">
      <div class="overlay-panel overlay-right">
        <img src='/assets/dfdf.jpg' id="imgBxForgot"/>
        </div>
      </div>
    </OverlayContainer>
  </Container>
  </Main>
 
  </>
  )
}

export default Forgot