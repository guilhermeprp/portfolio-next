'use client'

import React, { useContext } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Locale } from '@/language/locale';

import './projects.css';

export function Projects() {
	const { translate } = useContext(Locale);

	return (
		<section id="section-projects" className="sections">
			<div className="wrapper">
				<div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
					<div className="section-title-row">
						<h1 className="section-title">
							{'< Projects'}
							<span className="blink-caret">|</span>
						</h1>
						<div className="section-background-line" />
					</div>
					<div className="projects-box-section">
						{/* {translate.projects?.map((element, index) => (
							<div
								key={element.id}
								data-aos={`${index % 2 === 1 ? 'fade-left' : 'fade-right'}`}
								data-aos-delay="200"
								data-aos-duration="1000"
								className="projects-row"
							>
								<a
									href={element.link}
									className={`projects-img-box ${element.imgOrder}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={element.img}
										alt={element.title}
										width="800"
										height="450"
									/>
								</a>
								<div
									className={`projects-description-box ${index % 2 === 1 ? 'text-align-end' : ''}`}
								>
									<h2>{element.title}</h2>
									<p>{element.text}</p>
									<a
										href={element.link}
										className="text-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span>{element.linkSpan}</span>
										<FontAwesomeIcon icon={faArrowRight} />
									</a>
								</div>
							</div>
						))} */}
					</div>
				</div>
			</div>
		</section>
	);
}
