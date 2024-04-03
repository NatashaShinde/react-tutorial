import React, { useEffect, useState } from 'react'

function UseEffect_after_render() {
	const [count, setCount] = useState(0)

	//useEffect is function like useState, we simply have to call it.
	//It accepts function which excuted after EVERY RENDER.
	useEffect(() => {
		document.title = `You clicked ${count} times`
	})
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>click {count} times</button>
		</div>
	)
}

export default UseEffect_after_render
