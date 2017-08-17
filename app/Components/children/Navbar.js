import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
  render(){
    return(
        <div className="row">
        <div className="navbar navbar-fixed-top">
                <nav className="navbar navbar-inverse navbar-fixed-top animated slideInDown" id="navbar">
                    <div className="container-fluid">
                    <div className="col-4"></div>
                    <div className="col-6">
                        <ul className="nav navbar-nav">
                            <li className="listItem"><Link to="/">Home</Link></li>
                            <li className="listItem"><Link to="/about">About Me</Link></li>
                            <li className="listItem"><Link to="/portfolio">Skills & Projects</Link></li>
                            <li className="listItem"><Link to="/contact">Connect</Link></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="nav navbar-nav">
                            <li className="socialLogos">
                                <a href="https://github.com/EtWham" target="_blank"><i id="gitLogo" className="fa fa-github"></i></a>
                            </li>
                            <li className="social">
                               <a href="https://www.linkedin.com/in/ethan-wham-9925b991" target="_blank"><i id="linkLogo" className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
        </div>
        </div>
    );
  }
}

export default Navbar;
