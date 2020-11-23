import React, { Component } from 'react'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,Row,Col
  } from 'reactstrap';
 import ali from "./ali.jpg";
 import riza from "./riza.jpg";
 import dodo from "./dodo.jpeg";
export default class About extends Component {
    render() {
     
        return (
            <div>
                  <h3 className="display-3">Biz Kim miyiz?</h3>
             <p >
                 Kendimizi tanıtalım...
              </p>
            <Row style={{backgroundImage:"url('https://marketingweek.imgix.net/content/uploads/2015/03/Digital_tech_breaker.png?auto=compress,format&q=60&w=980&h=400')",height:300}}>
        
          </Row>
          <Row style={{margin:"5px"}}>
          
          <Col xs="5">
            <h5 className="display-3">Doğukan ÖNCÜER</h5>
            <p className="lead">
            Merhaba ben doğukan.1999 Istanbul doğumluyum.
            İstanbul Aydın Üniversitesi 3.sınıf öğrencisiyim
            </p>
          </Col>
          <Col xs="7">
            <img style={{maxWidth:"300px"}}
              src={dodo}
              alt="merhaba"
              className="ml-20 rounded-circle"
              rounded

            />
          </Col>
        </Row>
          <Row style={{margin:"5px"}}>
          
          <Col xs="5">
            <h5 className="display-3">Ali Haydar Sevgili</h5>
            <p className="lead">
            Merhaba ben ali.1999 Istanbul doğumluyum.
            İstanbul Aydın Üniversitesi 3.sınıf öğrencisiyim
            </p>
          </Col>
          <Col xs="7">
            <img style={{maxWidth:"300px"}}
              src={ali}
              alt="merhaba"
              className="ml-10 rounded-circle"
              rounded

            />
          </Col>
        </Row>
        <Row style={{margin:"5px"}}>
          
          <Col xs="5">
            <h5 className="display-3">Rıza Mert tamYağcı</h5>
            <p className="lead">
            Merhaba ben Rıza.1999 Istanbul doğumluyum.
            İstanbul Aydın Üniversitesi 3.sınıf öğrencisiyim
            </p>
          </Col>
          <Col xs="7">
            <img style={{maxWidth:"300px"}}
              src={riza}
              alt="merhaba"
              className="ml-20 rounded-circle"
              rounded

            />
          </Col>
        </Row>


          </div>
        )
    }
}
