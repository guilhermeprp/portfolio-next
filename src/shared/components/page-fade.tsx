'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

export default function MainFade({ children }: { children: React.ReactNode }): JSX.Element {

	useEffect(() => {
		const lenis = new Lenis()

		const raf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf);
	}, [])

	return (
		<motion.main
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className={`relative flex column`}
		>
			{children}
		</motion.main>
	)
}
