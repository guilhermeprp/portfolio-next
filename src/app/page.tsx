import MainFade from '@/shared/components/page-fade';
import Banner from '@/app/_components/banner/banner';

import { Experience } from '@/components/home/experience/experience';
import Navigation from '@/app/_components/navigation';
import PreLoader from './_components/pre-loader';
import Projects from './_components/projects/projects';

export default function Landing(): JSX.Element {
  return (
    <MainFade>
      <PreLoader />
      <Navigation />
      <Banner />
      <Projects />
      <Experience />
    </MainFade>
  );
}
