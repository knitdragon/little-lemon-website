import imgA from "../Assets/Mario and Adrian A.jpg";
import imgB from "../Assets/Mario and Adrian b.jpg";


export default function About() {
  return (
    <div className="banner bg about" >
          <div className="banner-text ">
              <h1 className="txt-title clr-Primary2">Little Lemon</h1>
              <h2 className="txt-subtitle clr-Highlights1">Chicago</h2>
              <p className="txt-lead clr-Highlights1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris nulla, ullamcorper id nulla vel, aliquet viverra libero. Nam lobortis rhoncus ex et posuere. Nunc congue arcu arcu, in venenatis arcu facilisis eget. Etiam tempor varius pharetra. Sed vulputate, leo et ornare elementum, velit nisi.</p>
          </div>
          <div className="aboutImgs"></div>
          <img className="lowerImg" src={imgB} alt="Mario and Adrian cooking"/>
          <img className="upperImg" src={imgA} alt="Mario and Adrian in the kitchen"/>

    </div>
  );
}