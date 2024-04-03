import React from 'react'

export const FunctionClick = () => {
	function functionClick() {
		console.log('clicked')
	}
	return (
		<div>
			<button onClick={functionClick}>Click</button>
		</div>
	)
}
