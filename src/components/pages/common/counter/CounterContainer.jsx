import { useState, useEffect } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(5);
  const [nombre, setNombre] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad maxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    console.log("Se realizo un cambio");
  }, [nombre, contador]);

  console.log("actualizacion");

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      nombre={nombre}
      setNombre={setNombre}
    />
  );
};

export default CounterContainer;
