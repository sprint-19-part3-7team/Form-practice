import FormField from '@/components/form/form-field/FormField';

const PasswordField = ({ label = '비밀번호', required = true, error }) => {
  return (
    <FormField error={error}>
      <FormField.Label htmlFor='password' required={required}>
        {label}
      </FormField.Label>
      <FormField.Input
        id='password'
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요.'
        autoComplete='new-password'
        required={required}
      />
      <FormField.ErrorMsg />
    </FormField>
  );
};

export default PasswordField;
