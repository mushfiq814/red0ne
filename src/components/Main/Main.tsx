import './Main.css';

import React from 'react';
import Button from '../Button/Button';

const Main = () => {
	return (
		<div id="search-container" className="container">
			<div className="results-view">
				<div id="results">
					<div className="card-columns bricklayer" id="cardColumns"></div>
				</div>
			</div>

			<Button btnText="Load More" />
		</div>
	)
}

export default Main;