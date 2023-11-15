import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  let nombre = "Angelica";
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
