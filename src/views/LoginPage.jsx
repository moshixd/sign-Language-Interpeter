import { useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";

import Form from "../components/Form";
import NavBar from "../components/reused/NavBar";

const LoginPage = ({ user , onLogin }) => {
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user !== null) {
      navigate("/translation");
    }
  }, [user, navigate]);
  

  return (
    <>
      <NavBar />
      <Form onSubmit={onLogin} header={"username"} placeholder={"username"} />
    </>
  );
};

export default LoginPage;
