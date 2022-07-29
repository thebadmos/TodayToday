import React from "react";
import "../../../styles/screen.css";
import {
  Button,
  Button1,
  Container,
  FormContainer,
  OverlayContainer,
  Main,
} from "../../../styles/styledElements";
import Logo from "../../home/Logo";
import { Link } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <Container>
          <FormContainer id="sign-in-container">
            <form action="#">
              <Logo />
              <h6 className="text-base">Hello Again!</h6>
              <p className="text-GREEN-_100">
                Welcome back to your No 1 Classified Online Market
              </p>
              <input type="email" placeholder="Email Address" />
              {/* <input type="password" placeholder="Password" class="mt-2" /> */}
              <span className="text-GREEN-_100 font-semibold text-base"
               onClick={() => navigate("/forgot-password")}>Forget password?</span>
              <Button
                className="forgotPasswordBtn"
                onClick={() => navigate("/user-profile")}
              >
                LOGIN
              </Button>
              <Button1 className="googleSign">
                <FontAwesomeIcon icon={faGoogle} className="icon" size="xl" />
                <span className="ml-2"> Sign with Google</span>
              </Button1>
              <Link
                to="/register"
                className="text-sm italic text-GREEN-_100 font-semibold"
              >
                Don't have an account? SIGN UP
              </Link>
            </form> 
          </FormContainer>
          <OverlayContainer>
            <div class="overlay">
              <div class="overlay-panel overlay-right">
                <img src="/assets/1212.jpg" id="imgBx" />
              </div>
            </div>
          </OverlayContainer>
        </Container>
      </Main>
    </>
  );
}

export default Login;
