import React, {Component} from "react";
import { render } from 'react-dom';
import Form, { Input, Fieldset } from 'react-bootstrap-form';
import ValidationError from 'react-bootstrap-form';
import "../components-css/Reservation.css";
import HeatMap from './HeatMap.js';
import Footer from './Footer.js';


class Reservations extends Component{
  render (){
    return(
      <div>
        <div className="container">
          <div className="row ">
            <div className="col-md-12 Reservation-main">
              <h1>Conditions de réservation</h1>
            </div>
            <div className="col-md-6 Reservation-main">
              <h3>TARIFS</h3>
              <p>2 Heures : 165 euros <br/>Demi-journée : 210 euros <br/>Journée : 320 euros</p>
            </div>
            <div className="col-md-6 Reservation-main">
              <h3>FRAIS DE DEPLACEMENT</h3>
              <p>Frais de déplacement inclus dans le forfait <br/>Indemnité repas (pour la prestation journée si <br/> celui-ci n'est pas pris avec le groupe) : 25€</p>
            </div>
            <div className="col-md-6 Reservation-main">
              <h3>CONDITIONS D'ANNULATION</h3>
              <p>La prestation est intégralement due pour <br/> une annulation à moins de 24 heures. <br/> Une indemnité de 50% est due pour <br/>moins de 48 heures et de 25% à moins <br/>d'une semaine.</p>
            </div>
            <div className="col-md-6 Reservation-main">
              <h3>REGLEMENT</h3>
              <p>Le règlement est dû au plus tard une <br/>semaine avant le jour du guidage, <br/> transmis directement au guide.</p>
            </div>
          </div>
        </div>

        <div className="container form-style">
          <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 formulaire-titre">
            <h1 >Formulaire de  demande de réservation </h1>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8">
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Nom</label>
                <input type="text" className="form-control" placeholder="Nom"/>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input type="text" className="form-control"  placeholder="input your Email"/>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Chois de visit / Circuit</label>
                <input type="text" className="form-control" placeholder="Nom de Circuit"/>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2">dates</label>
                <input type="text" className="form-control"  placeholder="input dates de votre choix"/>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Message</label>
                <textarea type="text" className="form-control message" placeholder="input votre message"/>
                <input className="button-reserve" type="submit" name="submit" value="Demander une Rèservation" />
              </div>
            </form>
          </div>
         </div>
       </div>

       <div className="container-fluid">
         <div className="row mapslocation-margin">
           <div className="col-xs-12 col-sm-12 col-md-12 mapslocation">
             <HeatMap />
           </div>
        </div>
      </div>
      <Footer />
      </div>
    )
  }
}
export default Reservations;
