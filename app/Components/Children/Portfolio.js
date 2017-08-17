import React from 'react';
import Carousel from './Carousel.js';

class Portfolio extends React.Component{
	render(){
		return(
			<div className="row" id="skillsAndProjects">
			<div className="container" id="skills">
				<h1 id="portfolioTitle" className="center-text animated slideInDown"><strong>Portfolio</strong></h1> 
				<Carousel />
				<div id="frontendSkills" className="col-4">
					<p className="skillType" id="frontend">Front End</p>
					<div className="frontendSkills">
						<ul className="skillsList">
							<li className="skill">
								<i className="devicon-html5-plain-wordmark colored"></i>
							</li>
							<li className="skill">
								<i className="devicon-css3-plain-wordmark colored"></i>
							</li>
							<li className="skill">
								<i className="devicon-javascript-plain colored"></i>
							</li>
							<li className="skill">
								<i className="devicon-bootstrap-plain-wordmark colored"></i>
							</li>
							<li className="skill">
								<i className="devicon-jquery-plain-wordmark colored"></i>
							</li>
							<li className="skill">
								<i className="devicon-react-original-wordmark"></i>
							</li>
						</ul>
					</div>
				</div>
				<div id="backendSkills" className="col-4">
					<p className="skillType" id="backend">Back End</p>
					<div className="backendSkills">
						<ul className="skillsList">
							<li className="skill">
								<i className="devicon-nodejs-plain-wordmark colored"></i>
							</li>
							<li className="skill">
								<i className="devicon-express-original-wordmark"></i>
							</li>
							<li className="skill">
								<i className="devicon-mysql-plain colored"></i>
							</li>
							<li className="skill">
								<i className="devicon-mongodb-plain-wordmark colored"></i>
							</li>
							<li className='skill'>
								<i className="devicon-webpack-plain-wordmark colored"></i>
							</li>
						</ul>
					</div>
				</div>
				<div id="projects" className="col-4">
					<p className="apps" id="appsList">Projects</p>
					<div className='row'>
						<div className="card">
  							<img className="card-img-top" id="app1" alt=""></img>
  							<div className="card-body">
    							<h4 className="card-title"><u>Maritant Version 2:</u></h4>
    							<p className="card-text">Maritant is an ecommerce app utilizing the MERN Stack (MongoDB, Express, React, Node) and Bootstrap that allows professionals to locate and purchase specific industrial equipment data.</p>
    							<a target='_blank' href="https://maritant.herokuapp.com/#/" className="btn btn-primary">Try Me!</a>
  							</div>
						</div>
						<br>
						</br>
						<div className="card">
  							<img className="card-img-top" id="app2" alt=""></img>
  							<div className="card-body">
    							<h4 className="card-title"><u>Recipe Recorder:</u></h4>
    							<p className="card-text">Recipe Recorder is a recipe app built using HTML, Javascript, and JQuery to take specific ingredient input from users then search an API and provide recipes containing those ingredients.</p>
    							<a target='_blank' href="https://crisayala16.github.io/Recipe-App/" className="btn btn-primary">Try Me!</a>
  							</div>
						</div>
						<br>
						</br>
						<br>
						</br>
					</div>
				</div>
			</div>
			</div>
		);
	}

}

export default Portfolio;
