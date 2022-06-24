import React from "react";
import Input from "../Forms/Input";
import { PaymentsStyle } from "./styles";
import Shipping from "../Shipping/Shipping";
import useForm from "../../hooks/useForm";

const Payments = ({ open }) => {
  const number = useForm(false);
  return (
    <Shipping title="Pagamentos">
      {open.isPayments === true ? (
        <PaymentsStyle>
          <p>Numero para efetuar o pagamento (MPESA)</p>
          <Input
            error={number.error}
            name="number"
            onBlur={number.onBlur}
            onChange={number.onChange}
            value={number.value}
            type="number"
            id="number"
            label="Numero de Mpesa"
            placeholder="848984953"
          />
          <a href="https://">Finalizar a compra</a>
        </PaymentsStyle>
      ) : (
        <p>Complete os passos anterior</p>
      )}
    </Shipping>
  );
};

export default Payments;
