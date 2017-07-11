import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {React_Bootstrap_Carousel, Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import ScrollUpButton from "react-scroll-up-button";
import './App.css';
import Home from './components/Home.js';
import Guide from './components/Guide.js';
import Circuits from './components/Circuits.js';
import Visites from './components/Visites.js';
import Reservation from './components/Reservation.js';
import HeatMap from './components/HeatMap.js';
import FontAwesome from 'react-fontawesome';




class App extends Component {
  constructor(props) {
       super(props);
   }
   onSelect= (active,direction)=>{

   }
  render() {
    return (
      <BrowserRouter>
        <div className="App parallax">
          <div className="container">
          <div className="row frontpage">
            <div className="col-xs-12 col-sm-12 col-md-12 titrede-web">
              <h1>NADINE LE MARC GUIDE INTERPRETE</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 madein-Normandy">
              <FontAwesome className="Fontname" name="map-marker" />
              <div className="Name-Normandy">
                <h1>MADE IN NORMANDIE</h1>
                <h3>Visites et circuits guidés </h3>
              </div>

            </div>
          </div>
            <div className="row main-page">
              <div className="col-st-12 col-md-2 home-page"><Link to ="/"><h1>HOME</h1></Link></div>
              <div className="col-st-12 col-md-2 home-page"><Link to ="/components/Guide"><h1>GUIDE</h1></Link></div>
              <div className="col-st-12 col-md-2 home-page"><Link to ="/components/Circuits"><h1>CIRCUITS</h1></Link></div>
              <div className="col-st-12 col-md-2 home-page"><Link to ="/components/Visites"><h1>VISITES</h1></Link></div>
              <div className="col-st-12 col-md-3 home-page"><Link to ="/components/Reservation"><h1>RESERVATION</h1></Link></div>

            </div>
          </div>

          <div className="container-fluid">
            <React_Bootstrap_Carousel
              animation={true}
              onSelect={this.onSelect}
              className="carousel-fade">
              <div className="carousel1">

              </div>
              <div className="carousel2">

              </div>
              <div className="carousel3">

              </div>
            </React_Bootstrap_Carousel>
          </div>


          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/components/Guide" component={Guide}></Route>
            <Route exact path="/components/Circuits" component={Circuits}></Route>
            <Route exact path="/components/Visites" component={Visites}></Route>
            <Route exact path="/components/Reservation" component={Reservation}></Route>



          </Switch>


          <div className="ScrollButton">
            <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">
              <span className="BTN"> &#8593; UP</span>
            </ScrollUpButton>
        </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
