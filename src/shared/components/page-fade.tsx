'use client';

import { motion } from "framer-motion";

export default function MainFade({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<motion.main variants={variants} animate="animate" initial="initial" exit="exit" className='relative flex-col'>
			{children}
		</motion.main>
	)
}

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.5,
			when: 'beforeChildren',
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
			when: 'afterChildren',
		},
	},
};