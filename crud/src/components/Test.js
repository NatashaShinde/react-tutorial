import React, { useEffect, useState } from 'react'
import { EmployeeData } from '../EmployeeData'

function Test() {
	const [data, setData] = useState([])
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')
	const [id, setId] = useState('')

	useEffect(() => {
		setData(EmployeeData)
	}, [])

	const handleEdit = id => {
		const dt = data.find(item => item.id === id)
		console.log(dt)

		if (dt) {
			setId(id)
			setFirstName(dt.firstName)
			setLastName(dt.lastName)
			setAge(dt.age)
		}
	}

	const handleUpdate = () => {
		const index = data.findIndex(item => item.id === id)

		if (index !== -1) {
			const updateData = [...data]
			updateData[index] = { id, firstName, lastName, age }
			setData(updateData)

			handleClear()
		}
	}

	const handleDelete = id => {
		const dt = data.filter(d => d.id !== id)
		setData(dt)
	}

	const handlSave = () => {
		const dt = [...data]
		const newObj = {
			id: EmployeeData.length + 1,
			firstName: firstName,
			lastName: lastName,
			age: age,
		}
		dt.push(newObj)
		setData(dt)
	}

	const handleClear = () => {
		setId(0)
		setFirstName('')
		setLastName('')
		setAge('')
	}

	return (
		<div>
			<form className='d-flex'>
				<div>
					<label>Firstname:</label>
					<input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
				</div>
				<div>
					<label>Last name</label>
					<input type='text' value={lastName} onChange={e => setLastName(e.target.value)} />
				</div>
				<div>
					<label>Age</label>
					<input type='number' value={age} onChange={e => setAge(e.target.value)} />
				</div>
				&nbsp;
				<div>
					<button type='button' onClick={handleUpdate}>
						Update
					</button>
				</div>
				<div>
					<button type='button' onClick={handleClear}>
						Clear
					</button>
				</div>
			</form>
			<table className='table'>
				<thead>
					<tr>
						<td>Sr No.</td>
						<td>Id</td>
						<td>First Name</td>
						<td>Last Name</td>
						<td>Age</td>
						<td>Actiions</td>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.id}</td>
								<td>{item.firstName}</td>
								<td>{item.lastName}</td>
								<td>{item.age}</td>
								<td>
									<button type='button' className='btn btn-primary' onClick={() => handleEdit(item.id)}>
										Edit
									</button>
									<button type='button' className='btn btn-danger' onClick={() => handleDelete(item.id)}>
										Delete
									</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Test
