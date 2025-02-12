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
import { contactActions } from '@/redux/slices/contactSlice';
import { useAppDisPatch } from '@/redux/store';

const ContactEmail = () => {
  // const contactData = useAppSelector((state) => state.contactData);
  const dispatch = useAppDisPatch();

  const onSubmitEmail = (value: ContactEmailDataType) => {
    dispatch(contactActions.setEmailSlide(value));
    dispatch(contactActions.setSlideIndex(1));
  };

  return (
    <div className='h-[calc(100vh-89px)] grid place-content-center max-md:w-full'>
      <FormComponent
        initialValues={ContactEmailInitialValues}
        schema={ContactEmailSchema}
        onSubmit={onSubmitEmail}
      >
        <div className='flex gap-12 flex-col items-center'>
          <div className='flex gap-6 flex-col items-center'>
            <div className='text-[25px] leading-[29.55px] max-md:text-[18px] max-md:leading-[40px] text-white'>
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
