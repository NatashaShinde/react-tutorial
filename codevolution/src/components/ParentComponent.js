import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			parentName: 'Parent',
		}
	}

	//step 1: Definde the method
	greetParent = childName => {
		alert(`hello ${this.state.parentName} from ${childName}`)
	}

	//child comp calls parent comp method
	//
	render() {
		return (
			<div>
				{/* step 2: on child comp tag pass the method as a prop */}
				<ChildComponent greetHandler={this.greetParent} />
			</div>
		)
	}
}

export default ParentComponent
