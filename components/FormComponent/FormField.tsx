import clsx from 'clsx';
import { useField } from 'formik';

export interface InputFieldProps {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
}

export const TextInputField: React.FC<InputFieldProps> = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='relative'>
      <input
        {...field}
        {...props}
        autoFocus
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
