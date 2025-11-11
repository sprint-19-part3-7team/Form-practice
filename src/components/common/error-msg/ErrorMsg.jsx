import { useContext } from 'react';

const ErrorMsg = ({ context }) => {
  const { error } = useContext(context);

  if (!error) {
    return null;
  }

  return <span className='text-error'>{error}</span>;
};

export default ErrorMsg;
