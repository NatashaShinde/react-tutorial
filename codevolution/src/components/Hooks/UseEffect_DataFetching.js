import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffect_DataFetching() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				console.log(response.data)
				setPosts(response.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	return (
		<div>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	)
}

export default UseEffect_DataFetching
