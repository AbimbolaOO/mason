import FutureProofDigitalSolutions from './FutureProofDigitalSolutions/FutureProofDigitalSolutions';
import GlobalOrganization from './GlobalOrganization/GlobalOrganization';
import Hero from './Hero/Hero';
import Industries from './Industries/Industries';
import Projects from './Projects/Projects';
import ReachOutToUsContent from './ReachOutToUs/ReachOutToUsContent';

export default function Home() {
  return (
    <div className='border-2 border-cyan-900'>
      <Hero />
      <GlobalOrganization />
      <FutureProofDigitalSolutions />
      <Industries />
      <Projects />
      <ReachOutToUsContent />
    </div>
  );
}
