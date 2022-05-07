import React from "react";
import { Title } from "../../styles/styles";
import { IntroOnPageStyle } from "./styles";


const IntroOnPage = ({ text, Bg }) => {

  return (
    <IntroOnPageStyle bg={Bg ? Bg : '/quemsoms.jpg'}>
      <Title>{text}</Title>
    </IntroOnPageStyle>
  );
};

export default IntroOnPage;
