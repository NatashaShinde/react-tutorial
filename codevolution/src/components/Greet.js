import React, { Children } from 'react'

// export const Greet = ({ name, heroName }) => {
// 	return (
// 		<div>
// 			<h1>
// 				Hello {name} a.k.a {heroName}
// 			</h1>
// 		</div>
// 	)
// }

export const Greet = props => {
	const { name, heroName } = props
	return (
		<div>
			Hello{name} a.ka.a {heroName}
		</div>
	)
}

// export default Greet
