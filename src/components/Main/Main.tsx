import React from 'react';
import './Main.css';

const Main = () => {
	return (
		<div id="search-container" className="container">
			<div className="results-view">
				<div id="results">
					<div className="card-columns bricklayer" id="cardColumns"></div>
				</div>
			</div>

			<button className="btn" id="load-more-btn">Load More</button>
		</div>
	)
}

export default Main;