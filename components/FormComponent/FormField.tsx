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
    <div>
      <input
        {...field}
        {...props}
        autoFocus
        className='font-adventPro font-medium text-[70px] leading-[83.72px] placeholder:text-mason-form-placeholder bg-transparent caret-mason-red text-white appearance-none border-none focus:outline-none w-full'
      />

      {meta.touched && meta.error ? (
        <div className='text-mason-red'>{meta.error}</div>
      ) : null}
    </div>
  );
};
