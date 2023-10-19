import Navbar from "./components/pages/common/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Login from "./components/pages/login/Login";
import CounterContainer from "./components/pages/common/counter/CounterContainer";

function App() {
  let nombre = "Angelica";
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <ItemListContainer />
      <CounterContainer nombre={nombre} />
    </div>
  );
}

export default App;
