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
      price: 12.99,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestiae quae provident id!",
    },
    {
      id:2,
      title: "Bruschetta",
      image: dish2 ,
      price: 5.99,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestiae quae provident id!",
    },
    {
      id:3,
      title: "Lemon Dessert",
      image: dish3 ,
      price: 5.50,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestiae quae provident id!",
    },
  ]


  return (
    <>
      <div className="banner specialsHeader">
              <h2 className="txt-sectionTitle clr-Primary1">This week's specials!</h2>
              <button className="btnPrimary">Order Online</button>
          </div>
      <div className="specials">
        {dishes.map((dish)=>(<DishCard key={dish.id} dish={dish}/>))}
      </div>
    </>
  );
};