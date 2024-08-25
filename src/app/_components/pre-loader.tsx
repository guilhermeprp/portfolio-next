'use client';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import Loading from '../loading';

export default function PreLoader(): JSX.Element {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = 'default'
				window.scrollTo(0, 0);
			}, 2000)
		})()
	}, [])

	return (
		<AnimatePresence mode='wait'>
			{isLoading && <Loading />}
		</AnimatePresence>
	)
}
