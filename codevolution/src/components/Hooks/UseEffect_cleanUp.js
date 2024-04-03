import React, { useState } from 'react'
import UseEffect_run_once from './UseEffect_run_once'

function UseEffect_cleanUp() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <UseEffect_run_once />}
		</div>
	)
}

export default UseEffect_cleanUp
