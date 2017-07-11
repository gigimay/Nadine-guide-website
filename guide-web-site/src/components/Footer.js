import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../components-css/Footer.css';

class Footer extends Component{
  render (){
    return(
      <div className="container-fluid nadine-contactfild">
        <div className="row footer-row">
          <div className="col-md-4 nadine-contactmail">
            <h1>Contact</h1>
            <p>---</p>
            <h3>06 48 67 12 62</h3>
            <p>nadine.lemarc@gmail.com</p>
          </div>
          <div className="col-md-4">
            <form action="nadine.lemarc@gmail.com" className="footer-inputFilds">
              <div className="row">
              <div className="col-xs-12 col-md-6 form-group">
                <input type="text" className="col-xs-12 input-text" name="Nom" placeholder="Nom"/>
                <input type="text" className="col-xs-12 input-text" name="Email" placeholder="Email"/>
                <input type="text" className="col-xs-12 input-text" name="telephone" placeholder="Telephone"/>
                <input type="text" className="col-xs-12 input-text" name="subject" placeholder="Tubject"/>
              </div>

              <div className="col-xs-12 col-md-6 form-group">
                <textarea className="col-xs-12" name="message" cols="30" rows="8" placeholder="message"></textarea>
                <input className="col-xs-12 col-md-12" type="submit" name="submit" value="Envoye" />
              </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 footer-followme">
            <div className="col-md-4">
              <div><h2>vous pouvez me suivis sur </h2></div>

            </div>
            <div className="col-md-4">
              <h1>>>></h1>
            </div>
            <div className="col-md-4 footer-fontawesome">
              <a href="https://www.facebook.com/nadine.lemarc"><FontAwesome name="facebook-official"/></a>
              <a href="https://www.linkedin.com/in/nadine-le-marc-b7682390/"><FontAwesome name="linkedin-square"/></a>
              <a href="https://twitter.com/LudivineLouise?lang=en"><FontAwesome name="twitter-square"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
