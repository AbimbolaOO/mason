'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useReducer } from 'react';

import ChevronArrowDownIcon from '../Icons/ChevronArrowDownIcon';

interface IAccordion {
  title: string;
  children: React.ReactNode;
  handleStateChange?: (index: number) => void;
  index?: number;
  isOpen?: boolean;
  imageList?: { imageName: string }[];
}

// Type definition
export enum AccordionReducerActionType {
  CLICKED_SECTION = 'section-clicked',
}

interface IAccordionReducerActionType {
  type: AccordionReducerActionType;
  payload: { index: number };
}

// Reducers
function accordionReducer(
  state: { index: number },
  action: IAccordionReducerActionType
) {
  switch (action.type) {
    case AccordionReducerActionType.CLICKED_SECTION:
      // if (state.index === action.payload.index) {
      //   return { index: -1 };
      // }
      return { ...action.payload };
    default:
      return state;
  }
}

// Components

export const Accordion: React.FC<
  Pick<IAccordion, 'children' | 'imageList'>
> = ({ children, imageList }) => {
  const [state, dispatch] = useReducer(accordionReducer, {
    index: 0,
  });

  const handleStateChange = (index: number) => {
    dispatch({
      type: AccordionReducerActionType.CLICKED_SECTION,
      payload: { index },
    });
  };

  return (
    <div className='grid grid-cols-2 max-md:flex max-md:flex-col-reverse max-md:gap-8'>
      <div className='flex flex-col'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<IAccordion>(child)) {
            const isOpen = index === state.index ? true : false;
            return React.cloneElement(child, {
              ...child.props,
              handleStateChange,
              index,
              isOpen,
            });
          }
          return null; // Skip invalid children
        })}
      </div>

      <div className='ml-10 max-md:ml-0 relative'>
        <Image
          src={`/static/img/${imageList ? imageList[state.index]?.imageName : ''}.png`}
          alt='accordion image'
          width={600}
          height={600}
          priority
          className=''
        />
      </div>
    </div>
  );
};

export const AccordionCell: React.FC<IAccordion> = ({
  title,
  children,
  handleStateChange,
  isOpen,
  index,
}) => {
  return (
    <div className='flex flex-col border-b-[1px] border-mason-border '>
      {/* Header text */}
      <div
        onClick={() =>
          handleStateChange && index !== undefined && handleStateChange(index)
        }
        className={clsx(
          'flex items-center justify-between py-4 pr-4',
          isOpen ? 'cursor-default' : 'cursor-pointer',
          index === 0 && 'pt-0'
        )}
      >
        <div
          className={clsx(
            isOpen ? `text-mason-red` : 'text-[#232222]',
            'font-adventPro font-bold text-3xl leading-[45px] py-[5px]'
          )}
        >
          {title}
        </div>
        <ChevronArrowDownIcon
          className={clsx(
            isOpen ? 'rotate-180 text-mason-red' : 'rotate-0',
            'transition-all duration-300'
          )}
        />
      </div>

      {/* Description text */}
      <div
        className={clsx(
          'origin-top overflow-hidden transition-all duration-300 ease-in-out text-[15px] leading-[35px]',
          isOpen ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 pb-0 opacity-0'
        )}
      >
        <div className=''>{children}</div>
      </div>
    </div>
  );
};
