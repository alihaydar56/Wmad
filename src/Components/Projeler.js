import React, { Component } from "react";

import resim from "./resim.jpg";
import { Container, Row, Col } from "reactstrap";
import HeaderComponent from "./Header";
import CardComponent from "./Card";

export default class Projeler extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <Container>
          <Row>
            <Col>
              <img
                src="https://img-s2.onedio.com/id-5af072035867c5cc22a020e3/rev-0/raw/s-a8b8f745d193972708f4aa1794a5ce46ce44893d.jpg"
                style={{
                  borderRadius: "10px",
                  marginBottom: "30px",
                  maxHeight:"450px",
                  width:"1100px"
                }}
              ></img>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs="4">
              <CardComponent></CardComponent>
            </Col>
            <Col xs="4">
              <CardComponent></CardComponent>
            </Col>
            <Col xs="4">
              <CardComponent></CardComponent>
            </Col>
          </Row>
         
        </Container>
      </div>
    );
  }
}
