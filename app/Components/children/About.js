import React from 'react';

class About extends React.Component{
	render(){
		return(
			<div className="container-fixed">
			<div className="row" id="aboutMe">
			<h1 id="aboutTitle" className="center-text animated slideInDown"><strong>About Me</strong></h1>
			<div className="row">
				<div className="col-4"></div>
				<div className="col-4">		
					<div className="about-pic" id="about">
						<img className="w3-round-large w3-border" id="aboutPic" src="/images/Profile_Pic.jpg" alt="profilePic"></img>
					</div>
				</div>
				<div className="col-4"></div>
			</div>
			<br>
			</br>
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8">
					<p className="about-statement">I currently work for the <a className="currentJobLink" target="_blank" href="https://isoc-dc.org/">Washington DC Chapter of the Internet Society</a> as an assistant director engaging in Internet Governance concerns and I recently completed a six-month Full Stack Developer program with George Washington University.</p>

					<p>As a programmer, I enjoy creating applications with the MERN stack and always try to build applications that fulfill a purpose or need. I'm interested in stepping forward with both the knowledge I have accumulated at my current job and the valuable programming skills I have recently acquired to develop a unique perspective that I can employ in my career path.</p>
					<br>
					</br>
				</div>
			</div>
			<div className="col-1"></div>
		</div>
		</div>
		);
	}

}

export default About;
