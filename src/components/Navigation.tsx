import React from 'react'
import {Link} from 'react-router-dom'

type Props = {}

export const Navigation = (props: Props) => {
	return (
		<nav className='h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white'>
			<span className='font-bold'>React 2023</span>
			<span>
				<Link className='mr-2' to='/'>Product</Link>
				<Link className='mr-2'to='/about'>About</Link>
			</span>
		</nav>
	)
}
