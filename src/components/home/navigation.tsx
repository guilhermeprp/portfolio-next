import Link from "next/link";

export default function Navigation(): JSX.Element {
	return (
		<>
			<nav className="fixed top-7 right-7">
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
