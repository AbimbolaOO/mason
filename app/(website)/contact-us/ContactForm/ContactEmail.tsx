'use client';
import React from 'react';

import { FormComponent } from '@/components/FormComponent/FormComponent';
import { CenterTextInputField } from '@/components/FormComponent/FormField';
import SubmitButton from '@/components/FormComponent/SubmitButton';
import {
  ContactEmailDataType,
  ContactEmailInitialValues,
  ContactEmailSchema,
} from '@/models/contact-email.model';

const ContactEmail = () => {
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
        <div className='flex gap-12 flex-col items-center'>
          <div className='flex gap-6 flex-col items-center'>
            <div className='text-[25px] leading-[29.55px] text-white'>
              Get started with your email
            </div>
            <CenterTextInputField
              name='email'
              id='email'
              placeholder='type here'
              type='text'
            />
          </div>
          {/* submit button */}
          <SubmitButton />
        </div>
      </FormComponent>
    </div>
  );
};

export default ContactEmail;
