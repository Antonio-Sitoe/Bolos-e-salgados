import { Title } from "../../styles/styles";

import { SumaryStyle } from "./styles";
const Sumary = ({ title, description }) => {
  return (
    <SumaryStyle>
      <Title>{title}</Title>
      <p>{description}</p>
    </SumaryStyle>
  );
};

export default Sumary;
