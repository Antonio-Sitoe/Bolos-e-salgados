import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginGet from "./LoginGet";
import LoginCreate from "./LoginCreate";
import LoginPassoword from "./LoginPassoword";
import Page404 from "../Page404/Page404";
import { Container } from "../../styles/styles";
import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <Container>
        <Routes>
          <Route path="" element={<LoginGet />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="forgot" element={<LoginPassoword />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Container>
    </LoginContainer>
  );
};

export default Login;
