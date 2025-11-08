const PasswordForm = ({ password, error, onChangePassword }) => {
  const baseClass = `
    w-full max-w-[720px]
    px-4 py-3
    rounded-md
    bg-gray1
    text-gray5 font-pretendard text-regular-16 font-regular
    placeholder:text-gray4
    outline-none
  `;
  const borderClass = error ? 'border-error' : 'border-gray3';

  return (
    <div className="flex w-full flex-col items-center">
      <input
        type="password"
        value={password}
        onChange={e => onChangePassword(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
        className={`${baseClass} border ${borderClass}`}
      />
      {error && (
        <p className="text-error font-pretendard text-regular-16 font-regular mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordForm;
