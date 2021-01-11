import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div>
			<nav className="navbar">
				<span className="navbar-brand">red0ne</span>
				<span><button id="authButton" className="btn">Sign In</button></span>
			</nav>
		</div>
	)
}

export default Header;