import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles.css"
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
};

/* Need to install :
npm install react-router-dom --save
npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
*/