import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

// import Logo from "../../../assets/images/signUpLogo.svg";

// import Button from "../../Button";
// import Text from "../../Typography/Typography";

export default function AuthLayout() {
  const navigate = useNavigate();
  // const { pathname } = useLocation();

  return (
    <div className="" style={{ height: "100%" }}>
      <Outlet />
    </div>
  );
}
