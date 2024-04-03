import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
	const [columns, setColumns] = useState([])
	const [records, setRecords] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3030/users').then(res => {
			console.log(res.data[0])
			setColumns(Object.keys(res.data[0]))
			setRecords(res.data)
		})
	}, [])

	return (
		<div className='container mt-5'>
			<table className='table'>
				<thead>
					<tr>
						{columns.map((c, i) => (
							<th key={i}>{c}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{records.map((d, i) => (
						<tr key={i}>
							<td>{d.id}</td>
							<td>{d.name}</td>
							<td>{d.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default App
