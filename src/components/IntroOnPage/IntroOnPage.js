import React from "react";
import { Title } from "../../styles/styles";
import { IntroOnPageStyle } from "./styles";
import Background from "../../Assets/quemsoms.jpg";

const IntroOnPage = ({ text, Bg }) => {

  return (
    <IntroOnPageStyle bg={Bg ? Bg : Background}>
      <Title>{text}</Title>
    </IntroOnPageStyle>
  );
};

export default IntroOnPage;
