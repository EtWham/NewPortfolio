import React from 'react';
import Footer from './Footer.js';

class About extends React.Component{
	render(){
		return(
			<div className="container" id="aboutMe">
			<h1 id="aboutTitle" className="center-text animated slideInDown"><strong>About Me</strong></h1>
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">		
					<div className="about-pic" id="about">
						<img className="w3-round-large w3-border" id="aboutPic" src="/images/Profile_Pic.jpg" alt="profilePic"></img>
					</div>
				</div>
				<div className="col-md-4"></div>
			</div>
			<br>
			</br>
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<p className="about-statement">I currently work for the <a className="currentJobLink" target="_blank" href="https://isoc-dc.org/">Washington DC Chapter of the Internet Society</a> as its assistant director engaging in Internet Governance concerns and I recently completed a six-month Full Stack Developer program with George Washington University.</p>

					<p>As a programmer, I enjoy creating applications with the MERN stack and always try to build applications that fulfill a purpose or need I and others have.</p>

					<p>I'm interested in stepping further forward in Internet Governance with both the knowledge I have accumulated at my current job and the valuable programming skills I have recently acquired.</p>
					<br>
					</br>
				</div>
			</div>
			<div className="col-md-1"></div>
		</div>
		);
	}

}

export default About;
