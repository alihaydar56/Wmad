import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";
import HeaderComponent from "./Header";
import SliderComponent from "./Slider";


const Anasayfa = (props) => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <SliderComponent></SliderComponent>
      
    </div>
  );
};

export default Anasayfa;
