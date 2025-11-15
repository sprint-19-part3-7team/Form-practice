import { useContext } from 'react';
import { FormFieldContext } from '@/components/form/form-field/formFieldContext';

const Input = ({ id, name, placeholder, type = 'text', context, ...props }) => {
  const fieldContext = useContext(context || FormFieldContext);
  const error = fieldContext?.error;

  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      className={`h-14 w-full rounded-lg border px-4 placeholder:text-gray-300 ${error ? 'border-error' : 'border-gray-200'}`}
      {...props}
    />
  );
};

export default Input;
