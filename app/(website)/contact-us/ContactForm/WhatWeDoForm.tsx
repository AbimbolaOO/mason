'use client';
import React from 'react';

import { DotIconBtn } from '@/components/Buttons/Buttons';
import { CustomRadio, CustomRadioGroup } from '@/components/FormComponent/CustomRadioButton';
import { FormComponent } from '@/components/FormComponent/FormComponent';
import SubmitButton from '@/components/FormComponent/SubmitButton';
import ChevronArrowLeftIcon from '@/components/Icons/ChevronArrowLeftIcon';
import {
  ContactOptionsDataType,
  ContactOptionsInitialValues,
  ContactOptionsSchema,
} from '@/models/contact-options.model';

const reasonData = [
  'Run my ideas by your consultant feedback on how Mason can kick-start my project',
  'I want to build a complex system and I need an experienced team to bring my ideas to life',
  'I want to establish systems which enable third party and custom API offers',
  `I want to have my idea visualized through design and prototyping, I don't know what I want to do yet`,
];
const WhatWeDoForm = () => {
  const onSubmitOptions = (value: ContactOptionsDataType) => {
    alert(JSON.stringify(value));
  };

  return (
    <div className='h-fit pt-[13px] pb-[100px] bg-mason-black grid items-center px-[120px]'>
      <FormComponent
        initialValues={ContactOptionsInitialValues}
        schema={ContactOptionsSchema}
        onSubmit={onSubmitOptions}
      >
        <div className='grid grid-cols-2 items-center'>
          <div className='flex gap-12 flex-col items-start'>
            <div className='flex flex-col gap-6'>
              <div className='text-white text-[16px] leading-[18.91px] flex gap-1 cursor-pointer w-fit items-center'>
                <ChevronArrowLeftIcon /> <div>Back</div>
              </div>
              <div className='flex gap-6 flex-col'>
                <div className='text-[25px] leading-[29.55px] text-white'>
                  What will you like to do?
                </div>

                <CustomRadioGroup name='option'>
                  {reasonData.map((data) => (
                    <CustomRadio key={data} name='option' value={data}>
                      {data}
                    </CustomRadio>
                  ))}
                </CustomRadioGroup>
              </div>
            </div>

            <SubmitButton />
          </div>

          {/* Chat Viewer */}
          <div className='ml-auto'>
            <div className='items-center flex flex-col gap-12'>
              <div className='text-[30px] leading-[35.85px] text-white -skew-y-6'>
                Don’t see what you’re looking for?
              </div>
              <DotIconBtn
                label='Talk with Our Consultant'
                href='/book-a-free-consultation'
              />
            </div>
          </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default WhatWeDoForm;
