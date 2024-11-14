import React from "react";
import Logo from "../../assets/image/Logo.png";
// import WhiteLogo from "../../assets/image/white-logo.png";
// import { useLocation } from "react-router-dom";

const LogoBox = () => {
  // const location = useLocation();
  // const logo = location.pathname == "/contactUs" || location.pathname=="" ? WhiteLogo : Logo;

  return (
    <div className="w-9 h-9">
      <img src={Logo} alt="" />

    </div>
  );
};

export default LogoBox;
