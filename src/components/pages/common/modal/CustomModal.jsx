import ItemListContainer from "../../itemListContainer/ItemListContainer";
import CounterContainer from "../../common/counter/CounterContainer";

const CustomModal = ({ children }) => {
  return (
    <div>
      <h2>Este es el modal</h2>

      {children}
    </div>
  );
};

export default CustomModal;
