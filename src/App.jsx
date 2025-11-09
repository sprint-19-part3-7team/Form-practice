import BioForm from './components/Bio';
import EmailForm from './components/Email';
import PasswordForm from './components/Password';

function App() {
  return (
    <>
      <EmailForm />
      <PasswordForm />
      <BioForm />
      <h1 className="text-red-500 underline">Hello world!</h1>
      <p className="text-red-500">빨강 글씨</p>
      <p className="text-error">커스텀 빨강</p>
    </>
  );
}

export default App;
