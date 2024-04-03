import React, { useEffect, useState } from 'react'

function UseEffect_incorrect_dependency() {
	const [count, setCount] = useState(0)

	const tick = () => {
		setCount(count + 1)
	}

	useEffect(() => {
		const interval = setInterval(tick, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [count])

	return (
		<div>
			<h3>{count}</h3>
		</div>
	)
}

export default UseEffect_incorrect_dependency
