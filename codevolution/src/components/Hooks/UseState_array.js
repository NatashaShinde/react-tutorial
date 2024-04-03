import React, { useState } from 'react'

function UseState_array() {
	// State variable can be number, bollean, obj, or array
	// Here we are using array as a state variable
	const [items, setItems] = useState([])

	const addItems = () => {
		// setItems([],{})
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1,
				// random number between 1 to 10
			},
		])
	}
	return (
		<div>
			<h3>random number between 1 to 10</h3>
			<button onClick={addItems}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	)
}

export default UseState_array
