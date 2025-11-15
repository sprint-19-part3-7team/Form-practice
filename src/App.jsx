import FormField from '@/components/form/form-field/FormField';

const App = () => {
  return (
    <div className='px-4'>
      <form className='mx-auto flex max-w-180 flex-col gap-10 py-25'>
        <FormField.Email />
        <FormField.Password />
      </form>
    </div>
  );
};

export default App;
