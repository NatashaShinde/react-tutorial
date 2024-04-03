import React from 'react'

function PersonData({ personAsAttribute }) {
	return (
		<div>
			<h2>
				I am {personAsAttribute.name} and my age is {personAsAttribute.age} I am professional in{' '}
				{personAsAttribute.skill}
			</h2>
		</div>
	)
}

export default PersonData
