import * as Yup from 'yup';

export const ContactEmailSchema = Yup.object().shape({
  email: Yup.string().email().required('email is required')
});

export type ContactEmailDataType = Yup.InferType<typeof ContactEmailSchema>;

type InitialValues = {
  email: string;
};

export const ContactEmailInitialValues: InitialValues = {
  email: '',
};


export interface ContactEmailInterface {
  email: string;
}
