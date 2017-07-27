import React from 'react';

class Navbar extends React.Component{
  render(){
    return(
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
    );
  }
}

export default Navbar;
