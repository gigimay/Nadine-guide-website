import React, {Component} from "react";
import "../components-css/Visites.css";
import Footer from './Footer.js';


class Visites extends Component{
  render (){
    return(
      <div className="container ">
        <div className="row page-visites">
          <div className="col-md-9 visite1"></div>

          <div className="col-md-9 visites-context">
            <div className="col-md-2 time">2H</div>
            <div className="col-md-10 visit-info">
              <h3>Visit Paroramique de la ville de Cherbourg!!</h3>
              <p>La rade de Cherbourg, les Porte, la Gare Maritime Transatlantique et le Titanic, la Basilique Sainte-Trinité</p>
              <button>Prix: 165 Euros</button>
            </div>
          </div>

          <div className="col-md-9 visite2"></div>

          <div className="col-md-9 visites-context">
            <div className="col-md-2 time">2H</div>
            <div className="col-md-10 visit-info">
              <h3>Visit Paroramique de la ville de Cherbourg!!</h3>
              <p>La rade de Cherbourg, les Porte, la Gare Maritime Transatlantique et le Titanic, la Basilique Sainte-Trinité</p>
              <button>Prix: 165 Euros</button>
            </div>
          </div>

          <div className="col-md-9 visite3"></div>

          <div className="col-md-9 visites-context">
            <div className="col-md-2 time">2H</div>
            <div className="col-md-10 visit-info">
              <h3>Visit Paroramique de la ville de Cherbourg!!</h3>
              <p>La rade de Cherbourg, les Porte, la Gare Maritime Transatlantique et le Titanic, la Basilique Sainte-Trinité</p>
              <button>Prix: 165 Euros</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Visites;
