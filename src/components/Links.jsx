import React from 'react';
import { Link } from "react-router-dom";

const SideBtn = ({ nameClass, link }) => {
	return (
		<>
			<div className={`main__${nameClass} sides`}>
				<Link className="sides__link" to={link}>Learn</Link>
			</div>
		</>
	)
}

export default SideBtn
