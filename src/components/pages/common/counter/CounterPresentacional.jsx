const CounterPresentacional = ({
  sumar,
  contador,
  restar,
  nombre,
  setNombre,
}) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h4> {contador} </h4>
      <button onClick={restar}>restar</button>

      <h4>{nombre}</h4>
      <button onClick={() => setNombre("Efrain")}>Cambiar nombre</button>
    </div>
  );
};

export default CounterPresentacional;
