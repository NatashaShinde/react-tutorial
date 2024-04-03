import React from 'react'
import './myStyle.css'

export const Stylesheets = props => {
	let classColor = props.primary ? 'primary' : ''
	//if true set it as primary else empty string
	return (
		<div>
			<h1 className={`${classColor} font-xl`}>Stylesheets</h1>
		</div>
	)
}
