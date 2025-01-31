import * as Yup from 'yup';

export const ContactOptionsSchema = Yup.object().shape({
  option: Yup.string().required('Select an option')
});

export type ContactOptionsDataType = Yup.InferType<typeof ContactOptionsSchema>;

type InitialValues = {
  option: string;
};

export const ContactOptionsInitialValues: InitialValues = {
  option: '',
};


export interface ContactOptionsInterface {
  option: string;
}
