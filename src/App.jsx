import { useState } from "react";
import "./App.css";
import NavBar from "./components//navbar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <>
      <NavBar itemsInCart={itemsInCart} />
      <Outlet context={[itemsInCart, setItemsInCart]}/>
    </>
  );
}

export default App;
