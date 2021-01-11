import './Header.css';

import React from 'react';
import Button from '../Button/Button';

interface HeaderProps {
	title: string;
	btnText: string;
}

const Header = ({ title, btnText }: HeaderProps) => {
	return (
		<div className="header">

			<div className="left">
				<p>{title}</p>
			</div>

			<div className="right">
				<Button btnText={btnText} />
			</div>

		</div>
	)
}

export default Header;