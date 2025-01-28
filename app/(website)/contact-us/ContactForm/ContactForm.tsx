'use client';
import React from 'react';

import { FormComponent } from '@/components/FormComponent/FormComponent';
import { TextInputField } from '@/components/FormComponent/FormField';
import EnterIcon from '@/components/Icons/EnterIcon';
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
    <div className='h-[calc(100vh-89px)] bg-mason-black grid place-content-center border border-red-500'>
      <FormComponent
        initialValues={ContactEmailInitialValues}
        schema={ContactEmailSchema}
        onSubmit={onSubmitEmail}
      >
        <div className='flex gap-12 flex-col border border-red-300'>
          <div className='flex gap-6 flex-col'>
            <div className='text-[25px] leading-[29.55px] text-white'>
              Get started with your email
            </div>
            <TextInputField
              name='email'
              id='email'
              placeholder='type here'
              type='text'
            />
          </div>
          {/* submit button */}
          <div className='border flex items-center gap-6'>
            <button
              type='submit'
              className='bg-white rounded-[12px] text-[15px] leading-[20px] py-3 px-[52px]'
            >
              Next
            </button>
            <div className='flex gap-4'>
              <div className='text-white text-[15px]'>Or</div>
              <EnterIcon />
              <div className='text-white text-[15px]'>Press Enter</div>
            </div>
          </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default ContactForm;
