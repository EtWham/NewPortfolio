import React from 'react';
import Break from './Break.js';
import Typed from 'typed.js';


class Cover extends React.Component{
    render(){
        return(
          <div className="row">
          <div className="homepage-hero-module">
            <div className="video-container">
            <div className="filter"></div>
              <video autoPlay loop className="fillWidth">
                <source src="/mp4/For_Wes.mp4" type="video/mp4" />
                <source src="/public/webm/For_Wes.webm" type="video/webm" />
              </video>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <div className="nameTitle">
                <Break />
                  <p hidden>animate this cover as if it were typed out rahther than animate io</p>
                  <p id="typeName" className="animated slideInUp"><strong>Ethan Wham</strong></p>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
            </div>
          </div>
          </div>
        );
    }
}

export default Cover;

