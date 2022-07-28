import React from "react";
import "../../styles/screen.css";
import {
  Button,
  Container,
  FormContainer,
  OverlayContainer,
  Main
} from "../../styles/styledElements";
import tw from "twin.macro";
import Logo from "../Logo/Logo";

function NewPassword() {
  return (
    <>
    <Main>
      <Container>
        <FormContainer id="sign-in-container">
          <form action="#">
            <Logo />
            <h6>Create Password</h6>
            <p>
              Your new password must be different from your previously used
              passwords.
            </p>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <Button className="forgotPasswordBtn">CREATE PASSWORD</Button>
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
  );
}

export default NewPassword;
