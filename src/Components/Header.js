
import "../styles.css";
import Navbar from "./Navbar";
import logo from "../Assets/logo2.png";

export default function Header() {
  return (
    <header>
        <img className="logo" src={logo} alt="Little Lemon Resaurant's logo"/>
        <Navbar/>
    </header>
  );
};