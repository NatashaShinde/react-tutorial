import React from 'react'
import PersonData from './PersonData'

function PersonList() {
	const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
	const persons = [
		{
			id: 1,
			name: 'Bruce',
			age: 27,
			skill: 'React',
		},
		{
			id: 2,
			name: 'Diana',
			age: 22,
			skill: 'JS',
		},
		{
			id: 3,
			name: 'Clark',
			age: 17,
			skill: 'CPP',
		},
	]
	//pass person as a parameter which is pass as a prop to personData component
	const personlist = persons.map(person => <PersonData personAsAttribute={person} />)

	const nameList = names.map((name, index) => (
		<h2 key={index}>
			{index} {name}
		</h2>
	))
	return (
		// map method takes function as an argument
		// <div>{personlist}</div>
		<div>{nameList}</div>
	)
}

export default PersonList
