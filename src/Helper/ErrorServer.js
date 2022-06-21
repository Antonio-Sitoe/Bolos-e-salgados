import React from "react";
import { ErrorServer as Errror } from "./styles";

const ErrorServer = ({ error }) => {
  return <Errror>{error}</Errror>;
};

export default ErrorServer;
