'use client';

import Magnetic from '../../shared/components/magnetic'

export default function Navigation(): JSX.Element {
	const clickbtn = () => {
		window.scrollTo(0, 0);
	};

	return (
		<nav className='fixed top-0 w-screen p-4 z-10'>
			<ul className='flex'>
				<Magnetic>
					<div className='relative p-4 cursor-pointer font-semibold'>
						<a onClick={clickbtn}>Home</a>
					</div>
				</Magnetic>
				<Magnetic>
					<div className='relative p-4 cursor-pointer font-semibold'>
						<a onClick={clickbtn}>About</a>
					</div>
				</Magnetic>
			</ul>
		</nav>
	)
}
