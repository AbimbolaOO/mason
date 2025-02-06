import React from 'react';

import Header from '../Header/Header';
import ArrowRightIcon from '../Icons/ArrowRightIcon';

interface IData {
  label: string;
  link: string;
}
interface IFooterNav {
  title: string;
  data: IData[];
}

const footerNav: IFooterNav[] = [
  {
    title: 'Projects',
    data: [
      { label: 'Darum', link: 'DarumLink' },
      { label: 'Ethiopian Cargo', link: 'Ethiopian Cargo' },
      { label: 'Dwelling', link: 'Dwelling' },
    ],
  },
  {
    title: 'Solutions',
    data: [
      { label: 'Consultancy', link: 'Consultancy' },
      { label: 'Discovery and Planning', link: 'Ethiopian Cargo' },
      { label: 'Design and Prototyping', link: 'Dwelling' },
      { label: 'Software and API Development', link: 'Dwelling' },
    ],
  },
  {
    title: 'Industries',
    data: [
      { label: 'Property Tech', link: 'DarumLink' },
      { label: 'Fintech', link: 'Ethiopian Cargo' },
      { label: 'Logistics', link: 'Dwelling' },
      { label: 'Edtech', link: 'Consultancy' },
      { label: 'Corporate', link: 'Ethiopian Cargo' },
      { label: 'Government', link: 'Dwelling' },
      { label: 'Healthcare', link: 'Dwelling' },
      { label: 'Ecommerce', link: 'Dwelling' },
    ],
  },
];

interface FooterProps {
  toggleFooterFn: () => void;
}

const Footer: React.FC<FooterProps> = ({ toggleFooterFn }) => {
  return (
    <footer className='footer h-[100vh] bg-white flex pb-10 top-0 sticky flex-col justify-between z-40 max-md:z-[200] w-[100vw]'>
      <Header footer toggleFooterFn={toggleFooterFn} />
      <div className='flex flex-col gap-[148.7px] px-20 max-md:px-4 mt-[60px] max-md:mt-6 max-md:gap-0 max-md:h-full max-md:justify-between'>
        <div className='grid grid-cols-[59%_41%] max-md:flex max-md:flex-col-reverse max-md:gap-10 max-md:mt-0'>
          {/* Nav Area */}
          <div className='grid gap-10 text-xl grid-cols-3 mr-[60px] max-md:grid-cols-2 max-md:mr-0 max-md:gap-0'>
            {footerNav.map((footerData, index) => (
              <FooterNavCol
                key={index}
                navData={footerData.data}
                title={footerData.title}
              />
            ))}
          </div>

          {/* Email Area */}
          <EmailSection />
        </div>

        {/* Copy write area */}
        <div className='flex justify-between text-lg max-md:text-[12px] leading-[21.28px] max-md:leading-[14px] max-md:flex-col max-md:gap-4'>
          <div>Privacy Policy | Terms of Service</div>
          <div>
            &copy; {new Date().getFullYear()} Mason Atlantic. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface FooterNavColProps {
  title: string;
  navData: IData[];
}

const FooterNavCol: React.FC<FooterNavColProps> = ({ navData, title }) => {
  return (
    <div className='flex flex-col gap-6 max-md:gap-4'>
      <div
        className={`text-mason-tert-text max-md:text-mason-grey text-[50px] leading-[59.8px] max-md:text-[20px] max-md:leading-[23px] font-adventPro font-semibold`}
      >
        {title}
      </div>
      <div className='flex flex-col gap-5 max-md:gap-3'>
        {navData?.map((data, index) => (
          <div key={index} className='max-md:text-[12px] max-md:leading-[14px]'>
            {data.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const EmailSection = () => {
  return (
    <div className='pl-[60px] flex items-center max-md:pl-0 max-md:max-w-[480px]'>
      <div className='w-full flex flex-col gap-6 max-md:gap-4'>
        <div className='text-xl leading-[23px] max-md:text-[14px] max-md:leading-[18px]'>
          Subscribe to Our Newsletter
        </div>
        <form className='grid grid-cols-[12px_1fr_auto]'>
          <input
            type='email'
            name='email'
            placeholder='your email'
            className='font-adventPro text-[50px] leading-[59.8px] max-md:text-[35px] max-md:leading-[42px] font-semibold w-full peer placeholder-mason-placeholder focus:outline-none focus:ring-0'
            required
          ></input>
          <div className='h-[40px] w-1 bg-green-600 mr-2 self-end mb-2 peer-invalid:bg-mason-error col-start-1 row-start-1'></div>

          <button
            type='submit'
            className='peer-invalid:cursor-not-allowed py-5 px-4 cursor-pointer'
          >
            <ArrowRightIcon />
          </button>
        </form>
      </div>
    </div>
  );
};
