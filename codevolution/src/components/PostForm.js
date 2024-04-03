import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: '',
			title: '',
			body: '',
		}
	}

	changeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		//post method takes in 2nd argument which is data.
		//that has to be sent, in our case it is state obj this.state
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { userId, title, body } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input type='text' name='userId' value={userId} onChange={this.changeHandler} />
					</div>
					<div>
						<input type='text' name='title' value={title} onChange={this.changeHandler} />
					</div>
					<div>
						<input type='text' name='body' value={body} onChange={this.changeHandler} />
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm

/*
[e.target.name]: e.target.value,
// const user = {
// 	name: 'natasha', 
// 	role: 'FE'
// }

const i1 = 'name' // e.target.name
const i2 = 'role'

const v1 = 'Natasha' // e.target.value
const v2 = 'FE'

const user = {
	[i1]: v1 //key: value
	// name: 'Natahsa'
	// name: 'Natasha'
	// i1: Natasha
}


*/
