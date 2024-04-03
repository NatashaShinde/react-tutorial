import React, { Component } from 'react'

class Task2 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			backgroundColor: 'transparent',
			inputColor: '',
		}
	}

	handleValChange = event => {
		const typedColor = event.target.value

		this.setState({
			...this.state,
			inputColor: typedColor,
		})
	}

	handleSubmit = event => {
		event.preventDefault()

		this.setState({
			...this.state,
			backgroundColor: this.state.inputColor,
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className='box' style={{ backgroundColor: this.state.backgroundColor }}></div>
					<input type='text' value={this.state.inputColor} onChange={this.handleValChange} />
					<button type='submit'>Click me</button>
				</form>
			</div>
		)
	}
}

export default Task2
