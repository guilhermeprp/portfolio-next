'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function LazyImage({ path, alt }: { path: string, alt: string }) {

	const [image, setImage] = useState('' as string);

	useEffect(() => {
		(async () => {
			try {
				const image = await imageResolver(path);
				setImage(image);
			}
			catch (e) {
				console.log(e);
			}
		})()
	}, [path]);

	return (
		<>
			{!image ? <h1>Loading...</h1> : <Image src={image} alt={alt} width={300} height={300} className="z-20" />}
		</>
	)
}


function imageResolver(src: any): Promise<string> {
	const promise = new Promise(async (resolve: (src: string) => void, reject) => {
		const blob = await (await fetch(src)).blob();
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});

	return promise;
}
