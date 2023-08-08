import DishCard from "./DishCard";
import "../styles.css";

import dish1 from "../Assets/greeksalad.jpg";
import dish2 from "../Assets/bruschetta.jpeg";
import dish3 from "../Assets/lemondessert.jpg";


export default function Specials() {
  const dishes = [
    {
      id:1,
      title: "Greek Salad",
      image: dish1,
      price: "12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with cruncy garlic and rosemary croutons.",
    },
    {
      id:2,
      title: "Bruschetta",
      image: dish2 ,
      price: "5.99",
      description: "Our bruschetta is made from grilled bread that has been speared with garlic and seasoned with salt and olive oil.",
    },
    {
      id:3,
      title: "Lemon Dessert",
      image: dish3 ,
      price: "5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ]


  return (
    <>
      <div className="banner specialsHeader">
              <h2 className="txt-subtitle clr-Primary1">This week's specials!</h2>
              <button className="btnPrimary">Order Online</button>
          </div>
      <div className="specials">
        {dishes.map((dish)=>(<DishCard key={dish.id} dish={dish}/>))}
      </div>
    </>
  );
};