import { useField } from 'formik';
import { AsYouTypeFormatter } from 'google-libphonenumber';
import { useState } from 'react';

import { getCountryCode, getNigeriaData } from '@/utils/phoneNumberUtils';

import CountrySelectDropDown from './CountrySelectDropDown';

export interface PhoneNumberInputFieldProps {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
}

const PhoneNumberInputField: React.FC<PhoneNumberInputFieldProps> = ({
  ...props
}) => {
  // console.log('libphonenumber--->>', libphonenumber);
  const [field, meta, helper] = useField(props);
  const [inputValue, setInputValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(getNigeriaData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formatter = new AsYouTypeFormatter(
      selectedCountry?.countryISO ?? 'NG'
    );

    let formattedNumber = '';
    const countryCode = getCountryCode(value);
    console.log('lol-->', countryCode);
    if (countryCode) {
    }

    // const lorr = formatToInternational(value, selectedCountry?.countryISO);
    // console.log('lorr-->', lorr);

    for (const digit of value) {
      formattedNumber = formatter.inputDigit(digit);
    }
    // !
    helper.setValue(value);
    setInputValue(formattedNumber);

    console.log('formattedNumber', formattedNumber);
  };

  return (
    <div className='relative border border-yellow-400'>
      <div className='text-white grid grid-cols-[82px_1fr] items-center gap-6'>
        <CountrySelectDropDown setSelectedCountryFn={setSelectedCountry} />

        <input
          {...field}
          {...props}
          autoFocus
          value={inputValue}
          onChange={(e) => handleChange(e)}
          className='font-adventPro font-medium text-[70px] leading-[83.72px] placeholder:text-mason-form-placeholder bg-transparent caret-mason-red text-white appearance-none border-none focus:outline-none w-[448px]'
        />
      </div>

      {meta.touched && meta.error ? (
        <div className='text-mason-red absolute items-center w-full -bottom-7'>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default PhoneNumberInputField;
