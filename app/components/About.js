import React from 'react';

class About extends React.Component{
	render(){
		return(
			<div className="container" id="aboutMe">
			<h1 id="aboutTitle" className="center-text"><strong>About Me</strong></h1>
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">		
					<div class="about-pic" id="about">
						<img className="w3-round-large w3-border" id="aboutPic" src="../../assets/images/Profile_Pic.jpg" alt="profilePic">
					</div>
				</div>
				<div className="col-md-4"></div>
			</div>
			<br>
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-5">
					<h3 className="about-statement">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit nulla in nisi aliquet posuere. Etiam consequat aliquet nunc in sodales. Suspendisse finibus congue nisi, a iaculis enim faucibus quis. Ut mattis turpis facilisis dolor facilisis, eu fermentum ante lacinia. Donec porttitor, enim ut tempus iaculis, libero massa rutrum eros, id dapibus tortor sapien at quam. Aliquam ultricies cursus blandit. Phasellus ultrices non tellus eget imperdiet. Nunc eget augue enim. Integer eleifend nisl vitae odio eleifend euismod. Etiam nulla nisi, pulvinar eu suscipit nec, dapibus nec dolor. Phasellus eleifend velit sem, in fringilla velit tristique a. Quisque ornare rutrum ex, vel lacinia justo congue sed.</h3>
				</div>
				<div className="col-md-5">
					<h3 className="about-statement2">
						Suspendisse interdum, metus vel feugiat auctor, lacus elit vestibulum libero, eget pulvinar risus diam eget mi. Phasellus dignissim, nibh vitae laoreet lacinia, mauris justo fermentum nibh, id consequat nunc justo eget tortor. Donec rutrum velit quis tortor consectetur, et rutrum metus luctus. Cras ex risus, hendrerit id fermentum sed, lacinia eget eros. Nulla fringilla ex maximus urna tincidunt suscipit. Sed dapibus ipsum leo, in luctus felis ultricies sed. Nam ultrices dignissim sem, ullamcorper finibus velit aliquam vel. Praesent quis leo ac orci congue maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus odio sapien, blandit pulvinar justo a, mattis eleifend elit. In erat tortor, dapibus in gravida a, viverra eget nibh.</h3>
				</div>
			</div>
			<div className="col-md-1"></div>
		</div>
		);
	}

}

export default About;
