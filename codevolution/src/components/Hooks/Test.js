import React, { useState } from 'react'

function Test() {
	const [items, setItems] = useState('')
	const [datas, setDatas] = useState([])
	const [id, setId] = useState(0)

	const handleSubmit = () => {
		setDatas([...datas, items])
		console.log([...datas, items])
	}

	const handleDelete = () => {
		setDatas(datas.filter(item => item.id !== id))
	}

	return (
		<div>
			<input type='text' value={items} onChange={e => setItems(e.target.value)} />
			<button onClick={handleSubmit}>Add note</button>
			<button onClick={() => handleDelete(items.id)}>Delete</button>

			<ul>
				{datas.map((data, index) => (
					<li key={index}>{data}</li>
				))}
			</ul>
		</div>
	)
}

export default Test
