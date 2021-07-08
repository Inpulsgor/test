import React from 'react';

const Button = ({icon, text, color}) => {
	return (
		<button type="button" className="button" style={{ background: color}}>
			<img className="button__icon" src={icon} alt="icon" />
			{text}
		</button>
	)
}

export default Button
