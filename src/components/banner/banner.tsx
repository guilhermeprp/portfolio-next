import style from './banner.module.css'
import { Lora } from "next/font/google"

const lora = Lora({ subsets: ['latin'] })

export default function Banner(): JSX.Element {
	return (
		<article className="relative opacity-100 h-screen">
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max opacity-100">
				<h6>Guilherme Pimenta</h6>
				<h1 className={`text-7xl ${lora.className}`}>
					<b>The Magician <span className="hightlight">Developer</span></b>
					<br />
					<b>Casting wonderful layouts</b>
				</h1>
			</div>
			<video autoPlay muted loop className="z-0 h-screen opacity-30 object-cover">
				<source
					src="/assets/video/home-background.mp4"
					type="video/mp4"
				/>
			</video>

			<button title="Scroll Down Button" className={style.scroll_btn}/>
		</article>
	)
}
