import React, { Component } from 'react'

class Usergreeting extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: false,
		}
	}

	render() {
		//type 1
		// if (this.state.isLoggedIn) {
		// 	return <div>welcome codevalution</div>
		// } else {
		// 	return <div>Welcome guest</div>
		// }

		// type 2 with variables
		// 	let message
		// 	if (this.state.isLoggedIn) {
		// 		message = <div>Welcome codevalution</div>
		// 	} else {
		// 		message = <div>Welcome guest</div>
		// 	}
		// 	return <div>{message}</div>

		// type 3 with conditional operators
		// return this.state.isLoggedIn ? <div>Hello Codevaluation</div> : <div>Hello User</div>

		//type 4 short circuit operator
		//if u dont want to return false condition
		return this.state.isLoggedIn && <div>Welcome Codevaluation</div>
	}
}
export default Usergreeting
