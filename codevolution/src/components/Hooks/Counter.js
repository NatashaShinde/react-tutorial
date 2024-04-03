import React, { useState } from 'react'

function Counter() {
	const [counter, setCounter] = useState(0)
	return (
		<div>
			<h3>{counter}</h3>
			<button onClick={() => setCounter(counter + 1)}>click me</button>
		</div>
	)
}

export default Counter
