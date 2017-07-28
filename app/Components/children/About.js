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
					<p className="about-statement">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit nulla in nisi aliquet posuere. Etiam consequat aliquet nunc in sodales. Suspendisse finibus congue nisi, a iaculis enim faucibus quis. Ut mattis turpis facilisis dolor facilisis, eu fermentum ante lacinia. Donec porttitor, enim ut tempus iaculis, libero massa rutrum eros, id dapibus tortor sapien at quam. Aliquam ultricies cursus blandit. Phasellus ultrices non tellus eget imperdiet. Nunc eget augue enim. Integer eleifend nisl vitae odio eleifend euismod. Etiam nulla nisi, pulvinar eu suscipit nec, dapibus nec dolor. Phasellus eleifend velit sem, in fringilla velit tristique a. Quisque ornare rutrum ex, vel lacinia justo congue sed.</p>
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
