import { useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import NavBar from "../components/reused/NavBar";

const LoginPage = ({ props, onLogin }) => {
  /*
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("profile");
    }
  }, [user, navigate]);
  */

  return (
    <>
      <NavBar />
      <LoginForm onSubmit={onLogin} />
    </>
  );
};

export default LoginPage;
