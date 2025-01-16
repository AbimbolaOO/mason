import FutureProofDigitalSolutions from './FutureProofDigitalSolutions/FutureProofDigitalSolutions';
import GlobalOrganization from './GlobalOrganization/GlobalOrganization';
import Hero from './Hero/Hero';
import Industries from './Industries/Industries';

export default function Home() {
  return (
    <div className='border-2 border-cyan-900'>
      <Hero />
      <GlobalOrganization />
      <FutureProofDigitalSolutions />
      <Industries />
    </div>
  );
}
