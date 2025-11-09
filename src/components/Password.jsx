import { useState } from 'react';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = value => {
    setPassword(value);

    if (value === '') setError('');
    else if (value.length < 8)
      setError('비밀번호는 최소 8자 이상이어야 합니다.');
    else setError('');
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={e => handleChange(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default PasswordForm;
