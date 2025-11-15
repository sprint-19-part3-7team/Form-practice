import { useContext } from 'react';
import { FormFieldContext } from '@/components/form/form-field/formFieldContext';

const ErrorMsg = ({ context }) => {
  const fieldContext = useContext(context || FormFieldContext);
  const error = fieldContext?.error;

  if (!error) {
    return null;
  }

  return <span className='text-error'>{error}</span>;
};

export default ErrorMsg;
