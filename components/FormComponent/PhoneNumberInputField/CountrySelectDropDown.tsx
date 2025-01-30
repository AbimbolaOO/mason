import React, { useMemo, useRef, useState } from 'react';

import ChevronArrowDownIcon from '@/components/Icons/ChevronArrowDownIcon';
import useOutsideClick from '@/hooks/ui-control/useOutsideClick';
import {
  CountryPhoneInterface,
  countryPhoneObj,
  getNigeriaData,
} from '@/utils/phoneNumberUtils';

interface CountrySelectDropDownProps {
  setSelectedCountryFn: (...args: any) => void;
}

const CountrySelectDropDown: React.FC<CountrySelectDropDownProps> = ({
  setSelectedCountryFn,
}) => {
  const selectFieldRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState(getNigeriaData);
  useOutsideClick(selectFieldRef, () => setShowOptions(false));

  const phoneNumberObj = useMemo(() => {
    if (searchValue !== '') {
      return countryPhoneObj.filter((data) => {
        return data?.countryName
          ?.toLowerCase()
          ?.includes(searchValue?.toLocaleLowerCase());
      });
    } else {
      return countryPhoneObj;
    }
  }, [searchValue]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePickedCountry = (countryData: CountryPhoneInterface) => {
    setSelectedCountry(countryData);
    setSelectedCountryFn(countryData);
    setShowOptions(!showOptions);
  };

  return (
    <div className='flex h-full relative'>
      {/* Selected */}
      <div
        onClick={() => setShowOptions(!showOptions)}
        className='grid gap-2 grid-cols-[1fr_auto] items-center w-full cursor-pointer'
      >
        <div className='text-[42px] grid place-content-center'>
          {selectedCountry?.flag}
        </div>
        <ChevronArrowDownIcon />
      </div>

      {/* Options Dropdown */}
      {showOptions && (
        <div
          ref={selectFieldRef}
          className='absolute top-[100%] w-full bg-mason-black z-20 text-black h-fit max-h-[200px] overflow-auto grid gap-[1px]'
        >
          <input
            value={searchValue}
            onChange={handleSearchValue}
            placeholder='search'
            className='appearance-none border-none focus:outline-none py-2 font-medium p-2 w-full'
          />
          {phoneNumberObj.map((countryData, index) => (
            <div
              className='bg-white text-lg py-2 grid pl-2 cursor-pointer hover:bg-gray-200'
              onClick={() => handlePickedCountry(countryData)}
              key={index}
            >
              {countryData.flag} {countryData.countryISO}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelectDropDown;
