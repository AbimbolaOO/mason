import Link from 'next/link';

import ChevronArrowLeftIcon from '../Icons/ChevronArrowLeftIcon';
import DotIcon from '../Icons/DotIcon';

interface DotIconBtnProps {
  href: string;
  label: string;
  target?: string;
}

export const DotIconBtn: React.FC<DotIconBtnProps> = ({
  href,
  label,
  target = '_self',
}) => {
  return (
    <Link href={href} target={target} className='launchBtn'>
      <button className='bg-white rounded-xl text-[15px] leading-[20px] flex gap-2 text-mason-black w-fit py-3 px-4 items-center'>
        {label} <DotIcon />
      </button>
    </Link>
  );
};

interface BackButtonsProps {
  backFn: (...args: any) => void;
}

export const BackButtons: React.FC<BackButtonsProps> = ({ backFn }) => {
  return (
    <div
      onClick={() => backFn()}
      className='text-white text-[16px] leading-[18.91px] flex gap-1 cursor-pointer w-fit items-center'
    >
      <ChevronArrowLeftIcon /> <div>Back</div>
    </div>
  );
};
