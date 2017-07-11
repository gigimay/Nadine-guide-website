import React, {Component} from "react";
import "../components-css/Guide.css";
import FontAwesome from 'react-fontawesome';
import Footer from './Footer.js';

class Guide extends Component{
  render (){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 guide-skils">
              <FontAwesome className="Fontname" name="lightbulb-o" />
              <h2>Compétences</h2>
              <p>Diplôme National de Guide interprète Conférencière</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 guide-skils">
              <FontAwesome className="Fontname" name="comments" />
              <h2>Compétences</h2>
              <p>Diplôme National de Guide interprète Conférencière</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 guide-skils">
              <FontAwesome className="Fontname" name="pencil" />
              <h2>Compétences</h2>
              <p>Diplôme National de Guide interprète Conférencière</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 guide-skils">
              <FontAwesome className="Fontname" name="grav" />
              <h2>Compétences</h2>
              <p>Diplôme National de Guide interprète Conférencière</p>
            </div>
          </div>
        </div>

        <div className="container-fluid nadine-name-snap">
          <div className="col-md-4  col-sm-12 col-xs-12 nadine-name">
            <h1>NADINE LE MARC</h1>
            <p>Solaire, dynamique et passionnée, je vous entraine à travers des siècles d'Histoire. En groupe, en famille ou entre amis , nous adapterons vos envies à mes circuits !</p>
          </div>
          <div className="col-md-8  col-sm-12 col-xs-12 nadine-snap">

          </div>
        </div>

        <div className="container">

          <div className="row recommended">
            <div className="col-md-6 col-xs-12 col-sm-12 recommended-head"></div>
            <div className="col-md-9 col-xs-12 col-sm-12 recommended-title"><h1>Amateurs de saveurs normandes, je vous recommande :</h1></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-1"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-2"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-3"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-4"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-5"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-6"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-7"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-8"></div>
            <div className="col-xs-12 col-sm-4 col-md-4 recommended-9"></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Guide;
