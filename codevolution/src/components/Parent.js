import React from 'react'
import Child from './Child'

const Parent = () => {
	const user = {
		username: 'samco',
		role: 'stock market',
	}
	return (
		<div>
			<Child user={user} />
		</div>
	)
}

export default Parent
