import React from 'react'
import Navigation from '@/components/home/navigation'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	)
}
