import * as Yup from 'yup';

export const ContactPhoneSchema = Yup.object().shape({
  phone: Yup.string().min(2).required('Phone is required')
});

export type ContactPhoneDataType = Yup.InferType<typeof ContactPhoneSchema>;

type InitialValues = {
  phone: string;
};

export const ContactPhoneInitialValues: InitialValues = {
  phone: '',
};


export interface ContactPhoneInterface {
  phone: string;
}
