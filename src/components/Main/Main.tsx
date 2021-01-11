import React from 'react';

function Main() {
	return (
		<div id="search-container" className="container">
			<div className="results-view">
				<div id="results">
					<div className="card-columns bricklayer" id="cardColumns"></div>
				</div>
			</div>
			<button id="load-more-btn" className="btn">Load More</button>
		</div>
	)
}

export default Main;