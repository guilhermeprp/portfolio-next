import Link from "next/link";

export default function Navigation(): JSX.Element {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link href="/">Landing</Link>
					</li>
					<li>
						<Link href="/home">Home</Link>
					</li>
					<li>
						<Link href="/home/about">About</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
