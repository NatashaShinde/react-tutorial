import React from 'react'

function ChildComponent(props) {
	return (
		<div>
			{/* in child comp access the method using the props obj */}
			<button onClick={() => props.greetHandler('child')}>Greet parent</button>
		</div>
	)
}

export default ChildComponent
