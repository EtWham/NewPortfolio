import React from 'react';

class Carousel extends React.Component{
	render(){
		return(
			<div className="container justify-content-center">
				<div id="carouselIndicators" className="carousel slide" data-ride="carousel">
  				<ol className="carousel-indicators">
    				<li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
    				<li data-target="#carouselIndicators" data-slide-to="1"></li>
    				<li data-target="#carouselIndicators" data-slide-to="2"></li>
  				</ol>
  				<div className="carousel-inner">
    				<div className="carousel-item active">
      					<img className="d-block w-100" src="images/maritant.png" alt="maritantSlide"></img>
    				</div>
   					 <div className="carousel-item">
      					<img className="d-block w-100" src="images/recipe.jpg" alt="recipeSlide"></img>
    				</div>
            <div className="carousel-item">
                <img className="d-block w-100" src="images/For_Wes.jpg" alt="portfolioSlide"></img>
            </div>
  				</div>
  				<a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
    				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    				<span className="sr-only">Previous</span>
  				</a>
  				<a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
    				<span className="carousel-control-next-icon" aria-hidden="true"></span>
    				<span className="sr-only">Next</span>
  				</a>
				</div>
			</div>			
			
		);
	}

}

export default Carousel;
