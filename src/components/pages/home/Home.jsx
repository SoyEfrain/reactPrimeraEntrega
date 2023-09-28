import { useState } from "react";

const Home = () => {
  const [counter, funcionCounter] = useState(0);
  const sumar = () => {
    funcionCounter(counter + 1);
  };
  return (
    <div>
      <h4> {counter} </h4>
      <button onClick={sumar}> Sumar</button>
    </div>
  );
};

export default Home;
