import React from 'react';

class Break extends React.Component{
	render(){
		return(
			<div className="container" id="skills">
				Want to organize; give this section a color and make the frontend & backend skills into multiple rows of the images instead of two columns; less vertical movement & better use of space
				<div class="row">
					<div id="skillsBox">
						<div class="col-md-2"></div>
						frontend column
						<div class="col-md-4">
							choose better colors for this!!!
							<p class="skillType" id="frontend">Front End</p>
							<div class="frontendSkills">
								<ul class="skillsList">
									<li class="skillItem">
										<i class="devicon-html5-plain-wordmark colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-css3-plain-wordmark colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-javascript-plain colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-bootstrap-plain-wordmark colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-jquery-plain-wordmark colored"></i>
									</li>
								</ul>
							</div>
						</div> end of frontend column
						backend column
						<div class="col-md-4">
							choose better colors for this!!!
							<p class="skillType" id="backend">Back End</p>
							<div class="backendSkills">
								<ul class="skillsList">
									<li class="skillItem">
										<i class="devicon-nodejs-plain-wordmark colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-express-original-wordmark colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-mysql-plain colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-mongodb-plain-wordmark colored"></i>
									</li>
									<li class="skillItem">
										<i class="devicon-react-original-wordmark colored"></i>
									</li>
								</ul>
							</div>
						</div> end of backend column
					</div>
				</div>
			</div>
		);
	}

}

export default Break;
