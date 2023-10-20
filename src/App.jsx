import Navbar from "./components/pages/common/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import CounterContainer from "./components/pages/common/counter/CounterContainer";

function App() {
  let nombre = "Angelica";
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
      <ItemListContainer />
      <ItemDetailContainer />
      <CounterContainer nombre={nombre} />
    </div>
  );
}

export default App;
