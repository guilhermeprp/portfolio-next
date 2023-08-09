import Link from 'next/link'

import PageFade from '@/shared/components/page-fade';

import './landing.css'

export default function Landing(): JSX.Element {
  return (
    <PageFade>
      <Link href="/home" className="press-start-background">
        <h1>Press Start</h1>
      </Link>
      <video autoPlay muted loop >
        <source
          src="/assets/video/landing-background.mp4"
          type="video/mp4"
        />
      </video>
    </PageFade>
  );
}
