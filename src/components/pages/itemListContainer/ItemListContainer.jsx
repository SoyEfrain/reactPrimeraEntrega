const ItemListContainer = (props) => {
  console.log(props.nombre);
  return (
    <div>
      <h4>Hola {props.nombre} como estas? </h4>
    </div>
  );
};

export default ItemListContainer;
