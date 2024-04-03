import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Create() {
	const [users, setUsers] = useState([])
	const [cUser, setCUser] = useState()
	const [id, setId] = useState(1)
	const [submitId, setSubmitId] = useState(1)

	useEffect(() => {
		axios
			.get(`http://localhost:3500/employees/`)
			.then(response => {
				setUsers(response.data)
				const fetchedUsers = response.data
				const currentUser = fetchedUsers.find(u => u.id == id)
				if (currentUser) setCUser(currentUser)
			})
			.catch(err => console.log(err))
	}, [submitId, id])

	const handleSubmit = () => {
		setSubmitId(id)
	}

	return (
		<>
			<form>
				<input type='number' value={id} onChange={e => setId(e.target.value)} />
				<input type='text' value={cUser?.firstname || ''} />
				<input type='text' value={cUser?.lastname || ''} />
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</form>

			<table style={{ border: '1px solid #000' }}>
				{users.map(user => (
					<tr key={user.id} style={{ border: '1px solid #000' }}>
						<td style={{ border: '1px solid #000' }}> {user.id}</td>
						<td style={{ border: '1px solid #000' }}>{user.firstname}</td>
						<td style={{ border: '1px solid #000' }}>{user.lastname}</td>
						<td style={{ border: '1px solid #000' }}>
							<button>Edit</button>
						</td>
						<td style={{ border: '1px solid #000' }}>
							<button>Delete</button>
						</td>
					</tr>
				))}
			</table>
		</>
	)
}

export default Create
