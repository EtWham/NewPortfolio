import React from 'react';
import Break from './Break.js';
import Typed from 'typed.js';
// import TypingName from './TypedName.js';

class Cover extends React.Component{
    render(){
        return(
          <div className="container-fluid">
            <div className="homepage-hero-module">
              <div className="video-container">
              <div className="filter"></div>
                <video autoPlay loop className="fillWidth">
                  <source src="/mp4/For_Wes.mp4" type="video/mp4" />
                  <source src="/public/webm/For_Wes.webm" type="video/webm" />
                </video>
              <div className="row">
                <div className="col">
                  <div className="nameTitle">
                  <Break />
                    <p hidden>animate your name as if it were typed out rather than animate io dropping it in place</p>
                    <div id="typeName" className="justify-content-center"></div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Cover;

