import { Lora } from "next/font/google"

const lora = Lora({ subsets: ['latin'] })

export default function Banner(): JSX.Element {
	return (
		<article className="relative opacity-100 h-screen overflow-hidden">
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max opacity-100">
				<h6>Guilherme Pimenta</h6>
				<h1 className={`text-7xl ${lora.className}`}>
					<b>The Magician <span className="hightlight">Developer</span></b>
					<br />
					<b>Casting wonderful layouts</b>
				</h1>
			</div>

			<video autoPlay muted loop className="z-0 min-w-[100dvw] min-h-screen aspect-video object-cover opacity-30">
				<source
					src="/assets/video/home-background.mp4"
					type="video/mp4"
				/>
			</video>

			<svg className="z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#0099ff" fillOpacity="1" d="M0,256L60,224C120,192,240,128,360,106.7C480,85,600,107,720,138.7C840,171,960,213,1080,229.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
			</svg>
		</article>
	)
}