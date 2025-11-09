import { useState } from 'react';

const BioForm = () => {
  const [bio, setBio] = useState('');

  const onChangeBio = e => {
    setBio(e.target.value);
  };

  return (
    <div>
      <textarea
        value={bio}
        onChange={onChangeBio}
        placeholder="자기소개를 입력해주세요."
      />
    </div>
  );
};

export default BioForm;
