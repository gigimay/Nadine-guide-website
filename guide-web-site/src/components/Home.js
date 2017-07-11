import React, {Component} from "react";
import "../components-css/Home.css";
import Footer from './Footer.js';


class Home extends Component{

  render (){
    return(
      <div>
        <div className="container">
          <div className="OSEZ">
            <h1>OSEZ LA NORMANDIE QUI VOUS RESSEMBLE</h1>
          </div>
          <div className="PHistoire">
            <p>
              En Normandie, l'Histoire se voit, se vit, se raconte.Combien est-il regrettable de découvrir des lieux chargés d'Histoire sans en connaître les secrets,sans en mesurer L'envergure? Combien est-il frustrant que la visite d'un site du patrimoine se limite à le parcourir à pied?
            </p>

            <svg height="170" width="170" margin-top="-10">
              <circle cx="80" cy="80" r="80" stroke="white" stroke-width="1" fill="" opacity="0.5" />
              <text  className="text-r" transform="rotate(30 20,40)" x="12" y="55" fill="white">LET'S GO!!</text>
            </svg>

            <p >
              Je vous emmène à la découverte de Cherbourg, de la Hague, du Val de Saire, des Plages du Débourquement.
              créons ensemble votre circuit: nature, culture, gastronomie, vous ne le regretterez pas!
            </p>
          </div>
          <div className="container allrows">
            <div className="row different-photos">
              <div className="col-xs-2 col-sm-2 col-md-2"></div>
              <div className="col-xs-2 col-sm-2 col-md-2"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 third-of-1st"><p className="parags">this is crazy thing i have ever seen</p></div>
              <div className="col-xs-2-12 col-sm-2 col-md-2"></div>
              <div className="col-xs-2-12 col-sm-2 col-md-2"></div>
            </div>
            <div className="row different-photos" >
              <div className="col-xs-2 col-sm-2  col-md-2"></div>
              <div className="col-xs-2 col-sm-2  col-md-2 second-of-2nd"></div>
              <div className="col-xs-2 col-sm-2  col-md-2 third-of-2nd"></div>
              <div className="col-xs-2 col-sm-2  col-md-2 fourth-of-2nd"></div>
              <div className="col-xs-2 col-sm-2  col-md-2"></div>
            </div>
            <div className="row different-photos" >
              <div className="col-xs-2 col-sm-2 col-md-2 first-of-3rd"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 second-of-3rd"></div>
              <div className="col-xs-2 col-sm-2 col-md-2  third-of-3rd"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 fourth-of-3rd"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 fifth-of-3rd"></div>
            </div>
            <div className="row different-photos" >
              <div className="col-xs-2 col-sm-2 col-md-2">1</div>
              <div className="col-xs-2 col-sm-2 col-md-2 second-of-fourth"></div>
              <div className="col-xs-2 col-sm-2 col-md-2  third-of-fourth"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 fourth-of-fourth"></div>
              <div className="col-xs-2 col-sm-2 col-md-2"></div>
            </div>
            <div className="row different-photos" >
              <div className="col-xs-2 col-sm-2 col-md-2"></div>
              <div className="col-xs-2 col-sm-2 col-md-2"></div>
              <div className="col-xs-2 col-sm-2 col-md-2 third-of-fifth"></div>
              <div className="col-xs-2 col-sm-2 col-md-2"></div>
              <div className="col-xs-2 col-sm-2 col-md-2"></div>
            </div>
          </div>

        </div>
        <div className="container-fluid">
          <div className="row histoire-justify">
            <div className="col-xs-12 col-sm-4 col-md-2 info-histoire1">
              <h2>HISTOIRE</h2>
              <p>Histoire de la Normandie, Débarquement</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 info-histoire2">
              <h2>A THEME</h2>
              <p>Visites originales pour toutes les envies</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 info-histoire3">
              <h2>SCOLAIRES</h2>
              <p>Visites adaptées au programme (Collège, Lycée)</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 info-histoire4">
              <h2>NATURE</h2>
              <p>Littoral, marais, bocages, falaises</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 info-histoire5">
              <h2>A LA CARTE</h2>
              <p>Circuits uniques, adaptés et personnalisés</p>
            </div>
            {/* <div className="col-xs-12 col-sm-4 col-md-2 info-histoire6">
              <h2>SOCIAL MEDIA</h2>
              <p>vous pouvez me contacter sûr! </p>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home;
