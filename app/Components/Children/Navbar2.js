import React from 'react';
import {Link} from 'react-router-dom';

class Navbar2 extends React.Component{
  render(){
    return(
        <div className="container-fixed">
            <div className="row">
                <nav className="navigation nav fixed-top justify-content-center navbar-dark bg-dark">
                    <div className="d-flex flex-row">
                        <div className="nav-item p-2">
                            <a className="nav-link" href="/">Home</a>
                        </div>
                        <div className="nav-item p-2">
                            <a className="nav-link" href="#/about">About Me</a>
                        </div>
                        <div className="nav-item p-2">
                            <a className="nav-link" href="#/portfolio">Skills & Projects</a>
                        </div>
                        <div className="nav-item p-2">
                            <a className="nav-link" href="#/contact">Connect with Me</a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end flex-row-revers">
                        <div className="nav-item p-2">
                            <a className="socialLogos" href="https://github.com/EtWham" target="_blank"><i id="gitLogo" className="fa fa-github"></i></a>
                        </div>
                        <div className="nav-item p-2 justify-content-end">
                            <a className="socialLogos" href="https://www.linkedin.com/in/ethan-wham-9925b991" target="_blank"><i id="linkLogo" className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
  }
}

export default Navbar2;

