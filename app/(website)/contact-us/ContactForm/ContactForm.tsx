'use client';
import React from 'react';

import { FormComponent } from '@/components/FormComponent/FormComponent';
import { TextInputField } from '@/components/FormComponent/FormField';
import SubmitButton from '@/components/FormComponent/SubmitButton';
import MasonIcon from '@/components/Icons/MasonIcon';
import {
  ContactEmailDataType,
  ContactEmailInitialValues,
  ContactEmailSchema,
} from '@/models/contact-email.model';

const ContactForm = () => {
  const onSubmitEmail = (value: ContactEmailDataType) => {
    alert(JSON.stringify(value));
  };

  return (
    // <ContactEmail />
    <div className='h-[calc(100vh-89px)] bg-mason-black grid items-center px-[120px]'>
      <FormComponent
        initialValues={ContactEmailInitialValues}
        schema={ContactEmailSchema}
        onSubmit={onSubmitEmail}
      >
        <div className='grid grid-cols-2 items-center'>
          <div className='flex gap-12 flex-col items-start'>
            <div className='flex gap-6 flex-col'>
              <div className='text-[25px] leading-[29.55px] text-white'>
                Get started with your email
              </div>
              <TextInputField
                name='email'
                id='text'
                placeholder='type here'
                type='text'
              />
            </div>

            <SubmitButton />
          </div>

          <div className='ml-auto'>
            <div className='bg-mason-clear w-[327px] p-4 rounded-[24px] text-white flex flex-col gap-[19px]'>
              <div className='flex flex-col items-center'>
                <div className='rounded-full text-[30px] leading-[25px] bg-mason-clear w-[50px] h-[50px] grid place-content-center'>
                  J
                </div>
                <div className='text-sm leading-[25px]'>+2348160</div>
              </div>
              <div className='rounded-[20px] p-[1px] bg-mason-linear-stroke'>
                <div className='rounded-[20px] px-5 py-[25px] bg-[#3D3D3D] text-white flex-col flex gap-4'>
                  <div className='flex items-center gap-2'>
                    <div>
                      <div className='w-[41px] h-[41px] rounded-full grid place-content-center bg-mason-linear-stroke'>
                        <div className='w-10 h-10 rounded-full grid place-content-center  bg-[#3D3D3D]'>
                          <MasonIcon />
                        </div>
                      </div>
                    </div>
                    <div className='text-[14px] leading-[25px] flex py-2 px-[11px] rounded-[15px] relative chatLeftMsg bg-[#4A4A4A]'>
                      Your full name?
                    </div>
                  </div>
                  <div className='text-[14px] leading-[25px] flex py-2 px-[11px] rounded-[15px] relative bg-[#4A4A4A] w-fit self-end chatRightMsg'>
                    John Doe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default ContactForm;
