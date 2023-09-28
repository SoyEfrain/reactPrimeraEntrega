import { useState } from "react";

const Login = () => {
  const [nombre, setNombre] = useState("Saimon");
  const cambiarNombre = () => {
    setNombre("Efrain");
  };

  return (
    <div>
      <h4> {nombre} </h4>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
};

export default Login;
