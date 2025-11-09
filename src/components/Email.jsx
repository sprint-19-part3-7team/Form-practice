import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = value => {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') setError('');
    else if (!emailRegex.test(value))
      setError('이메일 형식에 맞게 작성해주세요.');
    else setError('');
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={e => handleChange(e.target.value)}
        placeholder="이메일을 입력해주세요."
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default EmailForm;
