'use client';
import styles from './projects.module.css'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';

const projects = [
	{
		title: "Ailos",
		src: "ailos.png",
		color: "#c0c9d2"
	},
	{
		title: "STF",
		src: "stf-site.png",
		color: "#d7d7d7"
	},
	{
		title: "Agile Content",
		src: "agile-content-site.png",
		color: "#383431"
	},
	{
		title: "UNIP HC",
		src: "unip-hc.png",
		color: "#F2F2F2"
	},
	{
		title: "Genshin Damage Calculator",
		src: "genshin-dmg-site.png",
		color: "#383632"
	},
	{
		title: "Pokemon",
		src: "show-off-site.png",
		color: "#3c4547"
	}
]

const scaleAnimation = {
	initial: { scale: 0, x: "-50%", y: "-50%" },
	enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
	closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Projects() {

	const [modal, setModal] = useState({ active: false, index: 0 });
	const { active, index } = modal;
	const modalContainer = useRef<HTMLDivElement>(null);
	const cursor = useRef(null);
	const cursorLabel = useRef(null);

	let xMoveContainer = useRef(null);
	let yMoveContainer = useRef(null);
	let xMoveCursor = useRef(null);
	let yMoveCursor = useRef(null);
	let xMoveCursorLabel = useRef(null);
	let yMoveCursorLabel = useRef(null);

	useEffect(() => {
		//Move Container
		xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
		yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });

		//Move cursor
		xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
		yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });

		//Move cursor label
		xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
		yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
	}, [])

	const moveItems = (x: number, y: number) => {
		xMoveContainer.current(x);
		yMoveContainer.current(y);
		xMoveCursor.current(x);
		yMoveCursor.current(y);
		xMoveCursorLabel.current(x);
		yMoveCursorLabel.current(y);
	}
	const manageModal = (active: boolean, index: number, x: number, y: number) => {
		moveItems(x, y);
		setModal({ active, index });
	}

	return (
		<article onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects}>
			<div className={styles.body}>
				{
					projects.map((project, index) => {
						return <Project index={index} title={project.title} manageModal={manageModal} key={index} />
					})
				}
			</div>
			<button>
				<p>More work</p>
			</button>
			<>
				<motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
					<div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
						{
							projects.map((project, index) => {
								const { src, color } = project
								return <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
									<Image
										src={`/assets/image/applications/${src}`}
										width={1020}
										height={600}
										alt="image"
									/>
								</div>
							})
						}
					</div>
				</motion.div>
				<motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
				<motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
			</>
		</article>
	)
}


function Project({ index, title, manageModal }: {
	index: number,
	title: string,
	manageModal: (active: boolean, index: number, x: number, y: number) => void
}): JSX.Element {
	return (
		<div onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} className={styles.project}>
			<h2>{title}</h2>
			<p>Design & Development</p>
		</div>
	);
}
