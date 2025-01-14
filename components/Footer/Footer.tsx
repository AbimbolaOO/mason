import React from 'react';

import Header from '../Header/Header';
import SubmitArrowIcon from '../Icons/SubmitArrowIcon';

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

export default function Footer() {
  return (
    <footer className='bg-white h-[100vh] flex pb-10 top-0 sticky flex-col justify-between'>
      <Header footer />
      <div className='flex flex-col gap-[148.7px] px-20'>
        <div className='grid grid-cols-[59%_41%]'>
          {/* Nav Area */}
          <div className='grid gap-10 text-xl grid-cols-3 mr-[60px]'>
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
        <div className='flex justify-between text-lg leading-[21.28px]'>
          <div>Privacy Policy | Terms of Service</div>
          <div>
            &copy; {new Date().getFullYear()} Mason Atlantic. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterNavColProps {
  title: string;
  navData: IData[];
}

const FooterNavCol: React.FC<FooterNavColProps> = ({ navData, title }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div
        className={`text-mason-tert-text text-[50px] leading-[59.8px] font-adventPro font-semibold`}
      >
        {title}
      </div>
      <div className='flex flex-col gap-5'>
        {navData?.map((data, index) => <div key={index}>{data.label}</div>)}
      </div>
    </div>
  );
};

const EmailSection = () => {
  return (
    <div className='pl-[60px] flex items-center'>
      <div className='w-full flex flex-col gap-6'>
        <div className='text-xl leading-[23px]'>
          Subscribe to Our Newsletter
        </div>
        <form className='grid grid-cols-[12px_1fr_auto]'>
          <input
            type='email'
            name='email'
            placeholder='your email'
            className='font-adventPro text-[50px] leading-[59.8px] font-semibold w-full peer placeholder-mason-placeholder focus:outline-none focus:ring-0'
            required
          ></input>
          <div className='h-[40px] w-1 bg-green-600 mr-2 self-end mb-2 peer-invalid:bg-mason-error col-start-1 row-start-1'></div>

          <button
            type='submit'
            className='peer-invalid:cursor-not-allowed py-5 px-4 cursor-pointer'
          >
            <SubmitArrowIcon />
          </button>
        </form>
      </div>
    </div>
  );
};
