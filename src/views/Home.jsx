import React from 'react'

import { data, links } from '../services/data';
import { Button, Links } from "../components/";

const Home = () => {
	return (
		<>
			{/* <span className="main__subtitle">Welcome to</span> */}
			{/* <h2 className="main__title">JETROSPECTS</h2> */}
			<div className="main__middle">
				{data && data.map((item) => <Button key={item.id} icon={item.icon} text={item.text} color={item.color} fontColor={item.fontColor}/>)}
			</div>
			{links && links.map((link) => <Links key={link.id} nameClass={link.class} link={link.link}/>)}
		</>
	)
}

export default Home
