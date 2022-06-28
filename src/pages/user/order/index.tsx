import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import UserLayout from "../../../components/Usercomponents/UserLayout";
import { UserContext } from "../../../Context/UserContext";
import Loading from "../../../Helper/Loading";
import { Order, Subtitle } from "../../../styles/UserStyles";
import nookies from "nookies";
import FetchData from "../../../Helper/FetchData";
import { GET_ORDER } from "../../../services/Api";

const UserOrders = ({ data }) => {
  const { isAuthenticate, loading, user } = React.useContext(UserContext);

  console.log(data);

  if (loading) return <Loading />;
  if (isAuthenticate)
    return (
      <>
        <Head>
          <title>Pedidos de {user.username}</title>
          <meta name="description" content="Minha conta" />
        </Head>
        <UserLayout>
          <Order>
            <Subtitle>Pedidos recentes</Subtitle>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Pedido</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#11486</td>
                    <td>$ 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>
                  <tr>
                    <td>#11486</td>
                    <td> 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>
                  <tr>
                    <td>#11486</td>
                    <td>$ 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>

                  <tr>
                    <td>#11486</td>
                    <td> 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Order>
        </UserLayout>
      </>
    );
  return null;
};

export default UserOrders;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = nookies.get(ctx);

  const ORDEROPTIONS = GET_ORDER(token);
  const response = await FetchData(ORDEROPTIONS);


  if (!response) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
    console.log(response);

  return {
    props: {
      data: response,
    },
  };
};
