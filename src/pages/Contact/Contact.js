import { Container, Title } from "../../styles/styles";
import IntroOnPage from "../../components/IntroOnPage/IntroOnPage";
import contact from "../../Assets/icon-horario.svg";
import IconHour from "../../Assets/Group.svg";
import { BsTelephonePlusFill } from "react-icons/bs";
import {
  BtnWhatsap,
  Child,
  ChildWhatsapp,
  Contato,
  Grid,
} from "./styles";

const Contact = () => (
  <Contato>
    <IntroOnPage text="Entre em contato conosco" />
    <Container>
      <Grid>
        <Child>
          <img src={contact} alt="imagem" />
          <h3>HORARIOS</h3>
          <ul>
            <li>Segunda a Sexta das 11.00h às 19.00h</li>
            <li>Sábado das 10.00h às 18.00h</li>
            <li>Domingo das 10.00h às 14.00h</li>
          </ul>
        </Child>
        <Child>
          <img src={IconHour} alt="imagem" />
          <h3>CONTATO</h3>
          <ul>
            <li>
              <b>TELFONE:</b> 258 84898484
            </li>
            <li>
              <b>EMAIL:</b> antoniositoehl@gmail.com
            </li>
          </ul>
        </Child>
      </Grid>
      <ChildWhatsapp>
        <Title>ENTRE EM CONTATO PELO NOSSO WHATSAPP</Title>
        <div>
          <BtnWhatsap href="https://www.google.com">
            <BsTelephonePlusFill />
            WhatsApp
          </BtnWhatsap>
        </div>
      </ChildWhatsapp>
    </Container>
  </Contato>
);

export default Contact;
