import React from 'react';
import { Link } from "react-router-dom";

const Button = ({icon, text, color, fontColor, url}) => {
	return (
		<Link to={url} type="button" className="button" style={{ background: color, color: fontColor}}>
			<img className="button__icon" src={icon} alt="icon" />
			<span className="button__text">{text}</span>
		</Link>
	)
}

export default Button;
