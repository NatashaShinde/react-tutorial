import React, { useState } from 'react'

function UseState_object() {
	// State variable can be number, bollean, obj, event or array
	// Here we are using obj as a state variable
	const [name, setName] = useState({ firstName: '', lastName: '' })
	return (
		<div>
			<form>
				<input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
				<input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
				<br />
				<h2>Your first name is -{name.firstName}</h2>
				<h2>Your last name is -{name.lastName}</h2>
				<h2>{JSON.stringify(name)}</h2>
			</form>
		</div>
	)
}

export default UseState_object
