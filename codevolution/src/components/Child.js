import React from 'react'

const Child = props => {
	return (
		<div>
			<h1>Hello {props.user.username}</h1>
			<h3>This is {props.user.role} company</h3>
		</div>
	)
}

export default Child
