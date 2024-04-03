import React, { Component } from 'react'
// as we are using this keyword we need to use bind
class Eventbind extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'hello',
		}
		// type 3
		// this.clickHandler = this.clickHandler.bind(this)
	}
	// for type 1,2,3
	// clickHandler() {
	// 	this.setState({
	// 		message: 'GoodBye !',
	// 	})
	// }

	// type 4 arrow function
	clickHandler = () => {
		this.setState({
			message: 'good bye',
		})
	}

	render() {
		return (
			<div>
				<p>{this.state.message}</p>
				{/* type 1 */}
				{/* bind in render */}
				{/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

				{/* type 2 */}
				{/* if we dont want to use bind in render then we can use arrow fuction on click handler */}
				{/* <button onClick={()=>this.clickHandler()}>Click</button> */}

				{/* type 3 */}
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default Eventbind
