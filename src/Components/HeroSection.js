import "../styles.css";
import { Link } from "react-router-dom";
import restaurantImg from "../Assets/restaurant chef B.jpg";

export default function HeroSection() {
    return (
      <div className="hero bg">
            <div className="banner-text">
                <h1 className="txt-title clr-Primary2">Little Lemon</h1>
                <h2 className="txt-subtitle">Chicago</h2>
                <p className="txt-lead">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking">
                    <button className="btnPrimary">Reserve a table</button>
                </Link>
            </div>
            <img src={restaurantImg} alt=""/>
        </div>
    );
}