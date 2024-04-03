import React, { useState } from 'react'

function UseState_prevState() {
	const initialVal = 0
	const [counter, setCounter] = useState(initialVal)

	const inCrementByFive = () => {
		for (let i = 0; i < 5; i++) {
			setCounter(prevCounter => prevCounter + 1)
		}
	}

	return (
		<div>
			<div>{counter}</div>
			<button onClick={() => setCounter(initialVal)}>Reset</button>
			<button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
			<button onClick={() => setCounter(prevCounter => prevCounter - 1)}>Decrement</button>
			<button onClick={inCrementByFive}>IncByFive</button>
		</div>
	)
}

export default UseState_prevState
