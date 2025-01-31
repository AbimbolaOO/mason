import { useField, useFormikContext } from 'formik';
import React from 'react';

interface CustomRadioGroupProps {
  children: React.ReactNode;
  name: string;
}

export const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  children,
  name,
}) => {
  const { errors } = useFormikContext<any>();

  return (
    <div className='flex flex-col gap-6'>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          ...child.props,
        });
        // }
      })}

      {errors[name] ? (
        <div className='text-mason-red absolute items-center w-full -bottom-7'>
          {(errors as any)[name]}
        </div>
      ) : null}
    </div>
  );
};

export interface CustomRadioProps {
  label?: any;
  id?: string;
  name: string;
  children?: any;
  value?: string;
}

export const CustomRadio: React.FC<CustomRadioProps> = ({
  children,
  ...props
}) => {
  const [field] = useField({ ...props, type: 'radio' });

  return (
    <div className='rounded-[24px] p-[1px] bg-mason-linear-stroke overflow-hidden flex items-center justify-center'>
      <div className='bg-mason-black rounded-[24px]'>
        <label className='grid *:col-start-1 *:row-start-1'>
          <input type='radio' {...field} {...props} className='peer hidden' />
          <div className='rounded-[24px] *:cursor-pointer text-[25px] leading-[45px] cursor-pointer text-mason-light-border-grey p-4 peer-checked:bg-mason-light-red'>
            {children}
          </div>
        </label>
      </div>
    </div>
    // </div>
  );
};
