import React from 'react';
import Break from './Break.js';

class Cover extends React.Component{
    render(){
        return(
          <div className="homepage-hero-module">
            <div className="video-container">
            <div className="filter"></div>
              <video autoplay loop className="fillWidth">
                <source src="../../assets/mp4/For_Wes.mp4" type="video/mp4" />
                <source src="../../assets/webm/For_Wes.webm" type="video/webm" />
              </video>
            <div className="row">
              want the pills to be a different color
              <div className="navbar navbar-fixed-top">
                <div className="container animated slideInDown" role="navigation">
                  <div className="col-xs-8"></div>
                  <div className="col-xs-4">
                    <ul className="nav nav-pills" id="navbarList" role="tablist">
                      <li role="presentation"><a href="#aboutTitle">About</a></li>
                      <li role="presentation"><a href="#skillsTitle">Skills</a></li>
                      <li role="presentation"><a href="https://github.com/EtWham" target="_blank">Portfolio</a></li>
                      DON'T FORGET TO MAKE THE CONTACT MODAL
                      <li role="presentation"><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </div>  
              </div>
            </div>
            <Break />
            name header w/animate css
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="page-header">
                  animate your name as being typed out with the typing of the coverr
                  <p id="header" className="animated slideInUp"><strong>Ethan Wham</strong></p>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
            </div>
          </div>
        );
    }
}

export default Cover;

