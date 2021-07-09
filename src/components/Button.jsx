import React from 'react';

const Button = ({icon, text, color, fontColor}) => {
	return (
		<button type="button" className="button" style={{ background: color, color: fontColor}}>
			<img className="button__icon" src={icon} alt="icon" />
			<span className="button__text">{text}</span>
		</button>
	)
}

export default Button;
