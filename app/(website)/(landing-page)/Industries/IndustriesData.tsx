import CorporateIcon from '@/components/Icons/CorporateIcon';
import EcommerceIcon from '@/components/Icons/EcommerceIcon';
import EdtechIcon from '@/components/Icons/EdtechIcon';
import FintechIcon from '@/components/Icons/FinIcon';
import GovernmentIcon from '@/components/Icons/GovernmentIcon';
import HealthCareIcon from '@/components/Icons/HealthCareIcon';
import LogisticsIcon from '@/components/Icons/LogisticsIcon';
import ProptechIcon from '@/components/Icons/ProptechIcon';

interface IIndustriesData {
  icon: React.ReactNode;
  label: string;
  description: string;
  imageName: string;
}
export const IndustriesData: IIndustriesData[] = [
  {
    icon: <FintechIcon />,
    label: 'Fintech',
    description:
      'Experience secure and scalable financial software solutions designed to drive growth and efficiency in the digital economy, from mobile money platforms to mobile applications.',
    imageName: 'fintech',
  },
  {
    icon: <ProptechIcon />,
    label: 'Proptech',
    description:
      'We develop solutions that strategically position real estate companies for success on the global stage. Optimize property management, transactions, and data for enhanced efficiency and innovation.',
    imageName: 'proptech',
  },
  {
    icon: <LogisticsIcon />,
    label: 'Logistics & Supply Chain',
    description:
      'Discover innovative system management for all supply chain processes, from first to last mile deliveries, with integrative solutions that foster strong partnership opportunities.',
    imageName: 'logistics',
  },
  {
    icon: <EdtechIcon />,
    label: 'EdTech',
    description:
      'Make an impact with advanced LMS solutions that provide seamless access to education anytime, anywhere. Ensure robust systems that enhance course module delivery and facilitator management.',
    imageName: 'edtech',
  },
  {
    icon: <CorporateIcon />,
    label: 'Corporate Services',
    description:
      'HRS, ERP, and CRM systems and software are now within reach. Build robust internal systems that drive your business operations, ensuring security, protection, and data accuracy.',
    imageName: 'corporate',
  },
  {
    icon: <GovernmentIcon />,
    label: 'Government',
    description:
      'Implement systems that address daily human challenges, ensuring the protection of lives and property while driving digital economies supported by government initiatives.',
    imageName: 'government',
  },
  {
    icon: <HealthCareIcon />,
    label: 'Healthcare Systems',
    description:
      'Ensure clear communication and efficient healthcare services with robust medical systems that offer  seamless internal access and strong integration capabilities.',
    imageName: 'healthcare',
  },
  {
    icon: <EcommerceIcon />,
    label: 'Ecommerce',
    description:
      'Accelerate eCommerce development with cutting-edge technologies that ensure secure user data protection and provide comprehensive analytics, empowering data-driven sales decisions.',
    imageName: 'ecommerce',
  },
];
