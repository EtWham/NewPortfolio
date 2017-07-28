import React from 'react';

class Portfolio extends React.Component{
	render(){
		return(
			<div className="row" id="skillsAndProjects">
			<div className="container" id="skills">
				<h1 id="portfolioTitle" className="center-text animated slideInDown"><strong>Portfolio</strong></h1> 
				<div id="frontendSkills" className="col-md-4">
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
				<div id="backendSkills" className="col-md-4">
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
				<div id="projects" className="col-md-4">
					<p className="apps" id="appsList">Projects</p>
					<div className='row'>
						<div className="col-4">
						<h3 className='appTitle'><u>Maritant Version 2:</u></h3>
							<div className="app">
								<a target='_blank' href="https://maritant.herokuapp.com/#/">
									<div id="app1"></div>
								</a>
							</div>
						<div className='appDescription'>
							<p>
								Maritant is an ecommerce app utilizing the MERN Stack (MongoDB, Express, React, Node) and Bootstrap that allows professionals to locate and purchase specific industrial equipment data.
							</p>
						</div>
						<h3 className='appTitle'><u>Recipe Recorder:</u></h3>
							<div className="app">
								<a target='_blank' href="https://crisayala16.github.io/Recipe-App/">
									<div id="app2"></div>
								</a>
							</div>
						<div className='appDescription'>
							<p>
								Recipe Recorder is a recipe app built using HTML, Javascript, and JQuery to take specific ingredient input from users then search an API and provide recipes containing those ingredients.
							</p>
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
