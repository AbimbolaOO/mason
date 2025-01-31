'use client';
import React from 'react';

import { BackButtons } from '@/components/Buttons/Buttons';
import { FormComponent } from '@/components/FormComponent/FormComponent';
import { TextInputField } from '@/components/FormComponent/FormField';
import SubmitButton from '@/components/FormComponent/SubmitButton';
import {
  ContactNameDataType,
  ContactNameInitialValues,
  ContactNameSchema,
} from '@/models/contact-name.model';
import { contactActions } from '@/redux/slices/contactSlice';
import { useAppDisPatch } from '@/redux/store';

const ContactFullname = () => {
  const dispatch = useAppDisPatch();

  const onSubmitName = (value: ContactNameDataType) => {
    dispatch(contactActions.setFullNameSlide(value));
    dispatch(contactActions.setSlideIndex(1));
    dispatch(contactActions.setVerticalSlideIndex(1));
  };

  return (
    <FormComponent
      initialValues={ContactNameInitialValues}
      schema={ContactNameSchema}
      onSubmit={onSubmitName}
    >
      <div className='flex gap-12 flex-col items-start'>
        <div className='flex flex-col gap-6'>
          <BackButtons
            backFn={() => {
              dispatch(contactActions.setSlideIndex(-1));
            }}
          />
          <div className='flex gap-6 flex-col'>
            <div className='text-[25px] leading-[29.55px] text-white'>
              Your Full Name
            </div>
            <TextInputField
              name='fullName'
              id='fullName'
              placeholder='type here'
              type='text'
            />
          </div>
        </div>

        <SubmitButton />
      </div>
    </FormComponent>
  );
};

export default ContactFullname;
