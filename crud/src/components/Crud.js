import { useEffect, useState } from 'react'
import { EmployeeData } from '../EmployeeData'

function Crud() {
	const [data, setData] = useState([])
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState(0)
	const [id, setId] = useState(0)
	const [isUpdate, setIsUpdate] = useState(false)

	useEffect(() => {
		setData(EmployeeData)
	}, [])

	const handleEdit = id => {
		const dt = data.find(item => item.id === id)
		// If a matching employee is found, it will be stored in the dt array.
		// This if statement checks if a matching employee is found.
		// If dt is not undefined, it means there is a matching employee with the specified id.
		console.log(dt)
		if (dt) {
			setIsUpdate(true)
			setId(id)
			setFirstName(dt.firstName)
			setLastName(dt.lastName)
			setAge(dt.age)
		}
	}

	const handleDelete = id => {
		if (id > 0) {
			if (window.confirm('Are you sure you want to Delete item ?')) {
				const dt = data.filter(item => item.id !== id)
				// It checks if the id of the current item is not equal to the id passed as an argument to the handleDelete function.
				setData(dt)
			}
		}
	}

	const handleSave = e => {
		let error = ''

		if (firstName === '') {
			error += 'First name is required'
		}

		if (lastName === '') {
			error += 'Last Name is required'
		}

		if (age <= 0) {
			error += 'age is required'
		}

		if (error === '') {
			e.preventDefault()
			//getting final data after edit , delete etc
			const dt = [...data]
			const newObject = {
				id: EmployeeData.length + 1,
				firstName: firstName,
				lastName: lastName,
				age: age,
			}
			dt.push(newObject) //latest data
			setData(dt)
			console.log(dt)
		} else {
			alert(error)
		}
	}

	const handleUpdate = () => {
		// Find the index of the item to be updated based on its id
		const index = data.findIndex(item => item.id === id)
		// Check if the item exists in the data array
		if (index !== -1) {
			// If the item exists, create a copy of the data array
			const updatedData = [...data]

			// Update the item at the found index with the new values
			updatedData[index] = { id, firstName, lastName, age }
			setData(updatedData)

			handleClear()
		}
	}

	const handleClear = () => {
		setId(0)
		setFirstName('')
		setLastName('')
		setAge('')
		setIsUpdate(false)
	}

	return (
		<div className='App'>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px' }}>
				<div>
					<label> First Name:</label>
					<input
						type='text'
						placeholder='Enter First Name'
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<label> Last Name:</label>
					<input
						type='text'
						placeholder='Enter Last Name'
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<label> Age:</label>
					<input type='text' placeholder='Enter Age' value={age} onChange={e => setAge(e.target.value)} />
				</div>
				<div>
					{!isUpdate ? (
						<button className='btn btn-primary' onClick={e => handleSave(e)}>
							Save
						</button>
					) : (
						<button className='btn btn-primary' onClick={handleUpdate}>
							Update
						</button>
					)}
					&nbsp;
					<button className='btn btn-danger' onClick={handleClear}>
						Clear
					</button>
				</div>
			</div>
			<table className='table table-hover'>
				<thead>
					<tr>
						<td>Sr No.</td>
						<td>Id</td>
						<td>First Name</td>
						<td>Last Name</td>
						<td>Age</td>
						<td>Actions</td>
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
									<button className='btn btn-primary' onClick={() => handleEdit(item.id)}>
										Edit
									</button>
									&nbsp;
									<button className='btn btn-danger' onClick={() => handleDelete(item.id)}>
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

export default Crud
