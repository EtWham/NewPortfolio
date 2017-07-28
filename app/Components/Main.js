import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Children/Navbar.js';
import Home from './Children/Home.js';
import About from './Children/About.js';
import Portfolio from './Children/Portfolio.js';
import Contact from './Children/Contact.js';
import Footer from './Children/Footer.js';

class Main extends React.Component{
	render(){
		return(
			<div>
				<Navbar/>
				<div className='container-fluid'>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/portfolio' component={Portfolio}/>
					<Route path='/contact' component={Contact}/>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;