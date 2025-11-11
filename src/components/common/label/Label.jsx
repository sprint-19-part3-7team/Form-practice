const Label = ({ htmlFor, children, required = false, ...props }) => {
  return (
    <label htmlFor={htmlFor} className='font-bold-18' {...props}>
      {children} {required && <span className='font-bold-16 text-primary'>(필수)</span>}
    </label>
  );
};

export default Label;
