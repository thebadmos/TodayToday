import React from "react";
import "../../../styles/screen.css";
import {
  Button,
  Button1,
  Container2,
  FormContainer,
  OverlayContainer,
  Main,
} from "../../../styles/styledElements";
import Logo from "../../home/Logo";
import { Link } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <Container2>
          <FormContainer id="sign-in-container">
            <form action="#">
              <Logo />
              {/* <h6>Hi There!</h6> */}
              {/* <p>Welcome back to your No 1 Classified Online Market</p> */}

              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" class="mt-2" />
              <input type="number" placeholder="Phone Number" class="mt-2" />
              <input type="email" placeholder="Email Address" class="mt-2" />
              <input type="password" placeholder="Password" class="mt-2" />

              <Button className="forgotPasswordBtn"
               onClick={() => navigate("/login")}>SIGN UP
              </Button>
              <Button1 className="googleSign">
                <FontAwesomeIcon icon={faGoogle} className="icon" size="xl" />
                <span className="ml-2"> Sign with Google</span>
              </Button1>
              <Link
                to="/login"
                className="text-sm italic text-GREEN-_100 font-semibold"
              >
                Already have an account? LOGIN
              </Link>
            </form>
          </FormContainer>
          <OverlayContainer>
            <div class="overlay">
              <div class="overlay-panel overlay-right">
                <img src="/assets/dfdf.jpg" id="imgBxForgot" />
              </div>
            </div>
          </OverlayContainer>
        </Container2>
      </Main>
    </>
  );
}

export default SignUp;
