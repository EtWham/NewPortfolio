import React from 'react';
import Cover from './Cover.js';
import About from './About.js';
import Skills from './Skills.js';
import Footer from './Footer.js';

class Home extends React.Component{
	render(){
		return(	
			<div>
			<Cover/>

			<About />

			<Skills />

			<Footer />
			</div>
		);
	}
}
export default Home;