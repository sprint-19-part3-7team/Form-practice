import { useState } from 'react';

const BioForm = () => {
  const [bio, setBio] = useState('');

  const onChangeBio = e => {
    setBio(e.target.value);
  };

  const baseTextareaClass =
    'w-full max-w-[720px] h-[150px] resize-none py-3 px-4 rounded-lg border bg-gray1 text-gray5  font-regular text-regular-16 placeholder:text-gray4 placeholder:font-pretendard placeholder:text-regular-16 outline-none';

  return (
    <div className="flex w-full flex-col items-center">
      <textarea
        className={baseTextareaClass}
        value={bio}
        onChange={onChangeBio}
        placeholder="자기소개를 입력해주세요."
      />
    </div>
  );
};

export default BioForm;
