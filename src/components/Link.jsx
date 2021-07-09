import React from 'react'

const SideBtn = ({ nameClass, link }) => {
	return (
		<div>
			<div className={`sides main__${nameClass}`}>
				<Link to={link}>Learn</Link>
			</div>
		</div>
	)
}

export default SideBtn
