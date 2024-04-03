import React, { Component } from 'react'
import '../bgColors.css'

class ChangeBg extends Component {
	constructor(props) {
		super(props)

		this.state = {
			color: 'transparent',
		}
	}

	handleBg = color => {
		this.setState({
			color,
		})
	}

	render() {
		return (
			<div>
				<div className='box' style={{ backgroundColor: this.state.color }}></div>
				<div className='buttons'>
					<button type='submit' onClick={() => this.handleBg('red')}>
						Red
					</button>
					<button type='submit' onClick={() => this.handleBg('yellow')}>
						Yellow
					</button>
					<button type='submit' onClick={() => this.handleBg('blue')}>
						Blue
					</button>
				</div>
			</div>
		)
	}
}

export default ChangeBg
