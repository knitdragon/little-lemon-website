import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function DishCard({dish}) {
    return (
        <div className="dish card1">
            <img src={dish.image} alt={dish.title} />
            <div className="cardName">
                <h3 className="txt-cardTitle" >{dish.title}</h3>
                <p className="price txt-cardTitle">$ {dish.price}</p>
            </div>
            <p className="txt-body">{dish.description}</p>
            <Link to="/" className="cardLink">
                <p className="txt-sectionTitle">Order a delivery
                <FontAwesomeIcon icon={faBicycle}/></p>
            </Link>
        </div>
    )
}