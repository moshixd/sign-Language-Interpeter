import { useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";

import Form from "../components/Form";
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
      <Form onSubmit={onLogin} header={"username"} placeholder={"username"} />
    </>
  );
};

export default LoginPage;
