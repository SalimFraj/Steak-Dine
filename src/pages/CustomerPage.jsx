// Customer-facing page: view menu, cart, and make reservations

import React from "react";
import MenuList from "../components/MenuList";
import Cart from "../components/Cart";
import ReservationForm from "../components/ReservationForm";

const CustomerPage = () => {
  return (
    <div>
      <h1 style={{color:"gold", fontFamily: "Cambiria"}}>Welcome to Steak House</h1>
      <MenuList />
      <Cart />
      <ReservationForm />
    </div>
  );
};

export default CustomerPage;
