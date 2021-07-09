import React from 'react';
import { Link } from "react-router-dom";

import { data, links } from '../services/data';
import { Button, Link } from "../components/Button";

const Home = () => {
	return (
		<>
			<div className="main__middle">
				{/* <span className="main__subtitle">Welcome to</span> */}
				{/* <h2 className="main__title">JETROSPECTS</h2> */}

				{data && data.map((item) => <Button key={item.id} icon={item.icon} text={item.text} color={item.color} fontColor={item.fontColor}/>)}
			</div>
			<div className="sides main__left">
				<Link to="/learn">Learn</Link>
			</div>
			<div className="sides main__right">
				<Link to="/register">Register</Link>
			</div>
		</>
	)
}

export default Home
