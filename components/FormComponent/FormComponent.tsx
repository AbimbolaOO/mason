import clsx from 'clsx';
import { Form, Formik } from 'formik';

interface IFormComponent {
  initialValues: any;
  schema: any;
  onSubmit: any;
  children: any;
  className?: any;
  autoComplete?: string;
}

export const FormComponent: React.FC<IFormComponent> = ({
  initialValues,
  schema,
  onSubmit,
  children,
  className,
  autoComplete = 'on',
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form
        className={clsx('grid w-full', className)}
        autoComplete={autoComplete}
      >
        {children}
      </Form>
    </Formik>
  );
};
