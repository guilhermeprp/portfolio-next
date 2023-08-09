'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PageFade({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className="landing-body"
		>
			{children}
		</motion.div>
	)
}
