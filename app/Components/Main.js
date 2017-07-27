import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './children/Navbar.js';
import Home from './children/Home.js';

class Main extends React.Component{
	render(){
		return(
			<div>
				<Navbar/>
				<div className='container-fluid'>
					<Route exact path='/' component={Home}/>
				</div>
			</div>
		);
	}
}

export default Main;