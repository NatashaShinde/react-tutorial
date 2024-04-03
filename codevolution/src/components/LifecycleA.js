import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Samco',
		}
		console.log('lifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecycleA DidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
		return null
	}

	componentDidUpdate() {
		console.log('LifecycleA componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'codevalution',
		})
	}

	render() {
		console.log('Lifecycle A render')
		return (
			<div>
				<div>Lifecycle A</div>
				<LifecycleB />
				<button onClick={this.changeState}>change state</button>
			</div>
		)
	}
}

export default LifecycleA
