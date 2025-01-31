'use client';
import React from 'react';

import { BackButtons } from '@/components/Buttons/Buttons';
import { FormComponent } from '@/components/FormComponent/FormComponent';
import { PhoneNumberInputField } from '@/components/FormComponent/PhoneNumberInputField';
import SubmitButton from '@/components/FormComponent/SubmitButton';
import MasonIcon from '@/components/Icons/MasonIcon';
import {
  ContactPhoneDataType,
  ContactPhoneInitialValues,
  ContactPhoneSchema,
} from '@/models/contact-phone.model';
import { contactActions } from '@/redux/slices/contactSlice';
import { useAppDisPatch } from '@/redux/store';

const ContactPhoneNumber = () => {
  const dispatch = useAppDisPatch();

  const onSubmitPhone = (value: ContactPhoneDataType) => {
    dispatch(contactActions.setPhoneSlide(value));
    dispatch(contactActions.setSlideIndex(1));
  };

  return (
    <div className='h-[calc(100vh-89px)] bg-mason-black grid items-center px-[120px]'>
      <FormComponent
        initialValues={ContactPhoneInitialValues}
        schema={ContactPhoneSchema}
        onSubmit={onSubmitPhone}
      >
        <div className='grid grid-cols-2 items-center border border-red-400'>
          <div className='flex gap-12 flex-col items-start'>
            <div className='flex flex-col gap-6'>
              <BackButtons
                backFn={() => {
                  dispatch(contactActions.setSlideIndex(-1));
                  dispatch(contactActions.setVerticalSlideIndex(-1));
                }}
              />
              <div className='flex gap-6 flex-col'>
                <div className='text-[25px] leading-[29.55px] text-white'>
                  Your Phone Number
                </div>
                <PhoneNumberInputField
                  name='phone'
                  id='phone'
                  placeholder='type here'
                  type='text'
                />
              </div>
            </div>

            <SubmitButton />
          </div>

          {/* Chat Viewer */}
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

export default ContactPhoneNumber;
