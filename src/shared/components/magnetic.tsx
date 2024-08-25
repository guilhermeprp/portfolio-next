'use client';

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Magnetic({ children }: { children: React.ReactElement }) {
	const magnetic = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const currentMagnetic: HTMLDivElement = magnetic.current!;

		const xTo = gsap.quickTo(currentMagnetic, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
		const yTo = gsap.quickTo(currentMagnetic, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

		currentMagnetic.addEventListener("mousemove", (e) => {
			const { clientX, clientY } = e;
			const { height, width, left, top } = currentMagnetic.getBoundingClientRect();
			const x = clientX - (left + width / 2)
			const y = clientY - (top + height / 2)
			xTo(x * 0.35);
			yTo(y * 0.35)
		});

		currentMagnetic.addEventListener("mouseleave", () => {
			xTo(0);
			yTo(0)
		});

		return () => {
			currentMagnetic.removeEventListener("mousemove", () => { });
			currentMagnetic.removeEventListener("mouseleave", () => { });
		};
	}, [])

	return (
		React.cloneElement(children, { ref: magnetic })
	)
}