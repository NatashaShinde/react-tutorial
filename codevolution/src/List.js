import React, { useState } from 'react'

function List() {
	const [items, setItems] = useState('')
	const [datas, setDatas] = useState([])

	const handleSubmit = () => {
		setDatas([...datas, items])
		console.log([...datas, items])
	}

	return (
		<div>
			<input type='text' value={items} onChange={e => setItems(e.target.value)} />
			<button type='submit' onClick={handleSubmit}>
				Submit
			</button>

			<ul>
				{datas.map(data => (
					<li>{data}</li>
				))}
			</ul>
		</div>
	)
}

export default List
