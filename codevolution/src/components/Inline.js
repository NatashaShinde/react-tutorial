import React from 'react'

const heading = {
	fontSize: '72px',
	color: 'blue',
}

function Inline() {
	return (
		<div>
			{/* css can apply to every child component as well */}
			<h1 className='error'>error</h1>
			<h1 style={heading}>Inline</h1>
		</div>
	)
}

export default Inline
