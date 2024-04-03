import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

const Test = () => {
	const [posts, setPosts] = useState([])
	const [boldPosts, setBoldPosts] = useState([])

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
					<li key={post.id} style={{ fontWeight: boldPosts.find(bp => bp === post.id) ? 'bold' : 'normal' }}>
						{post.title}
						<button onClick={() => setBoldPosts([...boldPosts, post.id])}>Bold</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Test
