import './Button.css';

import React from 'react';

interface ButtonProps {
	btnText: string;
}

const Button = ({ btnText }: ButtonProps) => {
	return (
		<div>
			<button>{btnText}</button>
		</div>
	)
}

export default Button;