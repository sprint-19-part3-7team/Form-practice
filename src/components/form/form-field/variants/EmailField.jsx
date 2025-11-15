import FormField from '@/components/form/form-field/FormField';

const EmailField = ({ label = '이메일', required = true, error }) => {
  return (
    <FormField error={error}>
      <FormField.Label htmlFor='email' required={required}>
        {label}
      </FormField.Label>
      <FormField.Input
        id='email'
        name='email'
        type='email'
        placeholder='이메일을 입력해주세요.'
        autoComplete='email'
        required={required}
      />
      <FormField.ErrorMsg />
    </FormField>
  );
};

export default EmailField;
