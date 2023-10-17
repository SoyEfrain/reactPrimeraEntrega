import CardWidget from "../../cardWidget/CardWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>Logo</h4>
      <ul className={"categories"}>
        <li>Deportivo</li>
        <li>Clasico</li>
        <li>Camioneta</li>
      </ul>
      <CardWidget />
    </div>
  );
};

export default Navbar;
