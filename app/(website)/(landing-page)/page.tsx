import FutureProofDigitalSolutions from './FutureProofDigitalSolutions/FutureProofDigitalSolutions';
import GlobalOrganization from './GlobalOrganization/GlobalOrganization';
import Hero from './Hero/Hero';
import Industries from './Industries/Industries';
import Projects from './Projects/Projects';
import ReachOutToUs from './ReachOutToUs/ReachOutToUs';

export default function Home() {
  return (
    <div className='border-2 border-cyan-900'>
      <Hero />
      <GlobalOrganization />
      <FutureProofDigitalSolutions />
      <Industries />
      <Projects />
      <ReachOutToUs />
    </div>
  );
}
