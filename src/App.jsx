import "./App.css";
import NavBar from "./components//navbar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar totalCartItems={1} />
      <Outlet />
    </>
  );
}

export default App;
