import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffect_DataFetch_BtnClick() {
	const [post, setPost] = useState([])
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	const handleClick = () => {
		setIdFromButtonClick(id)
		//passing current id value which is text input field value
	}

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(respose => {
				console.log(respose.data)
				setPost(respose.data)
			})
			.catch(err => console.log(err))
	}, [idFromButtonClick])

	return (
		<div>
			<input type='text' value={id} onChange={e => setId(e.target.value)} />
			<div>{post.title}</div>
			<button type='button' onClick={handleClick}>
				Fetch Post
			</button>
		</div>
	)
}

export default UseEffect_DataFetch_BtnClick
