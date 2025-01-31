import * as Yup from 'yup';

export const ContactNameSchema = Yup.object().shape({
  fullName: Yup.string().min(2).required('Name is required')
});

export type ContactNameDataType = Yup.InferType<typeof ContactNameSchema>;

type InitialValues = {
  fullName: string;
};

export const ContactNameInitialValues: InitialValues = {
  fullName: '',
};


export interface ContactNameInterface {
  fullName: string;
}
