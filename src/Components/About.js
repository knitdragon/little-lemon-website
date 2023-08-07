import imgA from "../Assets/Mario and Adrian A.jpg";
import imgB from "../Assets/Mario and Adrian b.jpg";


export default function About() {
  return (
    <div className="banner bg about" >
          <div className="banner-text ">
              <h1 className="txt-title clr-Primary2">Little Lemon</h1>
              <h2 className="txt-subtitle clr-Highlights1">Chicago</h2>
              <p className="txt-lead clr-Highlights1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse consequatur nisi nobis!</p>
          </div>
          <div className="aboutImgs"></div>
          <img className="lowerImg" src={imgB} alt="Mario and Adrian cooking"/>
          <img className="upperImg" src={imgA} alt="Mario and Adrian in the kitchen"/>

    </div>
  );
}