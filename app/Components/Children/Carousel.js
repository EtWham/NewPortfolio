import React from 'react';

class Carousel extends React.Component{
	render(){
		return(
			<div id="carouselIndicators" className="carousel slide" dataRide="carousel">
  				<ol className="carousel-indicators">
    				<li dataTarget="#carouselIndicators" dataSlideTo="0" className="active"></li>
    				<li dataTarget="#carouselIndicators" dataSlideTo="1"></li>
    				<li dataTarget="#carouselIndicators" dataSlideTo="2"></li>
  				</ol>
  				<div className="carousel-inner">
    				<div className="carousel-item active">
      					<img className="d-block w-100" src="images/maritant.png" alt="maritantSlide"></img>
    				</div>
   					 <div className="carousel-item">
      					<img className="d-block w-100" src="images/recipe.jpg" alt="recipeSlide"></img>
    				</div>
    				<div className="carousel-item">
      					<img className="d-block w-100" src="images/Profile_Pic.jpg" alt="Test Slide"></img>
    				</div>
  				</div>
  				<a className="carousel-control-prev" href="#carouselIndicators" role="button" dataSlide="prev">
    				<span className="carousel-control-prev-icon" ariaHidden="true"></span>
    				<span className="sr-only">Previous</span>
  				</a>
  				<a className="carousel-control-next" href="#carouselIndicators" role="button" dataSlide="next">
    				<span className="carousel-control-next-icon" ariaHidden="true"></span>
    				<span className="sr-only">Next</span>
  				</a>
			</div>
		);
	}

}

export default Carousel;
