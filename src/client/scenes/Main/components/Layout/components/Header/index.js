import React from "react";

import LoginNavbar from "./components/LoginNavbar";
import AppNavbar from "./components/AppNavbar/index";

const Header = props => {
  return (props.isLoggedIn && <AppNavbar {...props} />) || <LoginNavbar />;
};

export default Header;