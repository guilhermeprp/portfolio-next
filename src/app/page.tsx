'use client'

import { AnimatePresence } from 'framer-motion';
import MainFade from '@/shared/components/page-fade';
import Banner from '@/components/banner/banner';
import Loading from './loading';

import { Projects } from '@/components/home/projects/projects';
import { Experience } from '@/components/home/experience/experience';
import { useEffect, useState } from 'react';

export default function Landing(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0);
      }, 2000)
    })()
  }, [])

  return (
    <MainFade>
      <AnimatePresence mode='wait'>
        {isLoading && <Loading />}
      </AnimatePresence>
      <Banner />
      <Projects />
      <Experience />
    </MainFade>
  );
}
