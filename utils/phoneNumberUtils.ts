import libphonenumber, {
    PhoneNumber,
    PhoneNumberFormat,
    PhoneNumberUtil,
} from 'google-libphonenumber';

export interface CountryPhoneInterface {
    countryISO: string;
    countryName: string;
    dialingCode: number;
    flag: string;
}
const getFlagEmoji = (countryCode: string) => {
    return countryCode
        .toUpperCase()
        .split('')
        .map((char) => String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65))
        .join('');
};

const countryNameLookup = new Intl.DisplayNames(['en'], { type: 'region' });

const getCountryName = (countryCode: string) => {
    return countryNameLookup.of(countryCode) || countryCode;
};

const phoneUtil = PhoneNumberUtil.getInstance();

const generateCountryInfo = (): CountryPhoneInterface[] => {

    const countries = phoneUtil.getSupportedRegions();

    const countyObj = countries.map((country) => ({
        countryISO: country,
        countryName: getCountryName(country),
        dialingCode: phoneUtil.getCountryCodeForRegion(country),
        flag: getFlagEmoji(country),
    }));

    return countyObj;
};

const getNigeriaCountryInfo = (): CountryPhoneInterface | undefined => {
    return generateCountryInfo().find(
        (country) => country.countryName.toLowerCase() === 'nigeria'
    );
};

export const getCountryCode = (phone: string) => {
    try {
        // phone must begin with '+'
        const numberProto = phoneUtil.parse(phone, "");
        return numberProto.getCountryCode();
        // const countryCode = numberProto.getCountryCode();
    } catch (error) {
        return -1;
    }
};

export const formatToInternational = (phoneNumber: string, countryISO: string = 'NG') => {
    try {
        const parsedNumber = phoneUtil.parse(phoneNumber, countryISO);
        return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL);
    } catch (error) {
        console.error("Invalid phone number:", error);
        return phoneNumber;
    }
};

export const countryPhoneObj = generateCountryInfo();
export const getNigeriaData = getNigeriaCountryInfo();
