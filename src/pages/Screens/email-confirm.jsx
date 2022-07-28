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
function EmailConfirm() {
  return (
    <>
    <Main>
    <Container>
    <FormContainer id="sign-in-container">
      <form action="#">
      <Logo/>
      <img src='/assets/Iconly-Bulk-Message.png' id="imgBxConfirm"/>
        <h6 className='emailHeader'>Check your E-mail</h6>
        <p className='forgotPassword'>
        We have sent a password recover instruction to
    your E-mail, kindly check. 
        </p>
       
      <input type="email" placeholder="todaytoday@gmail.com" />
      <Button className="forgotPasswordBtn">OPEN E-MAIL APP</Button>
        <span>Skip I’ll continue later</span>
        <span>Did not receive the e-mail, check your spam filter
      Or try another e-mail address</span>
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

export default EmailConfirm