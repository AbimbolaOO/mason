'use client';
import React from 'react';

import { BackButtons } from '@/components/Buttons/Buttons';
import { FormComponent } from '@/components/FormComponent/FormComponent';
import { PhoneNumberInputField } from '@/components/FormComponent/PhoneNumberInputField';
import SubmitButton from '@/components/FormComponent/SubmitButton';
import {
  ContactPhoneDataType,
  ContactPhoneInitialValues,
  ContactPhoneSchema,
} from '@/models/contact-phone.model';
import { contactActions } from '@/redux/slices/contactSlice';
import { useAppDisPatch, useAppSelector } from '@/redux/store';

const ContactPhoneNumber = () => {
  const dispatch = useAppDisPatch();
  const { verticalSlideIndex } = useAppSelector((state) => state.contactData);

  const onSubmitPhone = (value: ContactPhoneDataType) => {
    dispatch(contactActions.setPhoneSlide(value));
    dispatch(contactActions.setSlideIndex(1));
  };

  return (
    <FormComponent
      initialValues={ContactPhoneInitialValues}
      schema={ContactPhoneSchema}
      onSubmit={onSubmitPhone}
    >
      <div className='flex gap-12 flex-col items-start h-[273px]'>
        <div className='flex flex-col gap-6'>
          <BackButtons
            backFn={() => {
              dispatch(contactActions.setSlideIndex(-1));
              dispatch(contactActions.setVerticalSlideIndex(-1));
            }}
          />
          <div className='flex gap-6 flex-col'>
            <div className='text-[25px] leading-[29.55px] max-md:text-[18px] max-md:leading-[40px] text-white'>
              Your Phone Number
            </div>
            <PhoneNumberInputField
              name='phone'
              id='phone'
              placeholder='type here'
              type='text'
              autoFocus={verticalSlideIndex === 1}
              interactionFn={(value) => {
                dispatch(contactActions.setPhoneSlide({ phone: value }));
              }}
            />
          </div>
        </div>

        <SubmitButton />
      </div>
    </FormComponent>
  );
};

export default ContactPhoneNumber;
