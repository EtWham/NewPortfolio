import React from 'react';

class Skills extends React.Component{
	render(){
		return(
			<div className="row" id="skillsAndProjects">
			<div className="container" id="skills">
				Want to optimize; give this section a color and make the frontend & backend skills expand outlining apps displaying their use 
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
								<i className="devicon-react-original-wordmark colored"></i>
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
								<i className="devicon-express-original-wordmark colored"></i>
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


				</div>
			</div>
			</div>
		);
	}

}

export default Skills;
