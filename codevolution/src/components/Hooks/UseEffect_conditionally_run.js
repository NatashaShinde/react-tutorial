import React, { useEffect, useState } from 'react'

function UseEffect_conditionally_run() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')

	useEffect(() => {
		console.log('clicked')
		document.title = `click ${count} times`
	}, [count])
	return (
		<div>
			<input type='text' onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>click {count} times</button>
		</div>
	)
}

export default UseEffect_conditionally_run
