import React, { useEffect, useState } from 'react'

function UseEffect_run_once() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useEffect called')
		window.addEventListener('mousemove', logMousePosition)

		return () => {
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [])
	//empty array [] means effect will run only once

	return (
		<div>
			Hook x- {x}
			Hook y- {y}
		</div>
	)
}

export default UseEffect_run_once
