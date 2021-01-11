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
			<div>{title}</div>
			<Button btnText={btnText} />
		</div>
	)
}

export default Header;