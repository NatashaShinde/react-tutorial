import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffect_DataFetch_byID() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //append post id
			.then(response => {
				console.log(response.data)
				setPost(response.data)
			})
			.catch(err => console.log(err))
	}, [id])

	return (
		<div>
			<input type='text' value={id} onChange={e => setId(e.target.value)} />
			<div>{post.title}</div>
			{/* <ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	)
}

export default UseEffect_DataFetch_byID
