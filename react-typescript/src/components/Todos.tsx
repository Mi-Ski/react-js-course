import React from 'react'

type AppProps = {
	items: string[],
	children?: React.ReactNode
}

const Todos = ({items}: AppProps) => {
	return (
		<ul>
			{items.map((todo) => (
				<li key={todo}>{todo}</li>
			))}
		</ul>
	)
}

export default Todos