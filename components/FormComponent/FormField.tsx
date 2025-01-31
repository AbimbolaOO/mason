import clsx from 'clsx';
import { useField } from 'formik';
import { useState } from 'react';

export interface InputFieldProps {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
  interactionFn?: (...args: any) => void;
}

export const TextInputField: React.FC<InputFieldProps> = ({
  interactionFn,
  ...props
}) => {
  const [field, meta, helper] = useField(props);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // !
    helper.setValue(value);
    setInputValue(value);

    if (interactionFn) {
      interactionFn(value);
    }
  };

  return (
    <div className='relative'>
      <input
        {...field}
        {...props}
        autoFocus
        value={inputValue}
        onChange={(e) => handleChange(e)}
        className='font-adventPro font-medium text-[70px] leading-[83.72px] placeholder:text-mason-form-placeholder bg-transparent caret-mason-red text-white appearance-none border-none focus:outline-none w-[607px]'
      />

      {meta.touched && meta.error ? (
        <div className='text-mason-red absolute items-center w-full -bottom-7'>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export const CenterTextInputField: React.FC<InputFieldProps> = ({
  ...props
}) => {
  // const [centerAlign, setCenterAlign] = useState(false);
  const [field, meta] = useField(props);

  return (
    <div className='relative'>
      <input
        {...field}
        {...props}
        autoFocus
        // onClick={() => setCenterAlign(true)}
        className={clsx(
          'font-adventPro font-medium text-[70px] leading-[83.72px] placeholder:text-mason-form-placeholder bg-transparent caret-mason-red text-white appearance-none border-none focus:outline-none text-center w-[500px]'
          // centerAlign ? 'text-center w-[400px]' : 'text-left'
        )}
      />

      {meta.touched && meta.error ? (
        <div className='text-mason-red absolute items-center w-full text-center -bottom-7'>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
