import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppRouter from "./router/AppRouter";

function App() {
  let nombre = "Angelica";
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
