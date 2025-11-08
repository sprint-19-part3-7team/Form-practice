const EmailForm = ({ email, error, onChangeEmail }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <input
        type="email"
        value={email}
        onChange={e => onChangeEmail(e.target.value)}
        placeholder="이메일을 입력해주세요."
        className={`w-full max-w-[720px] rounded-md border px-4 py-3 ${error ? "border-error" : "border-gray3"} bg-gray1 text-gray5 font-pretendard text-regular-16 font-regular placeholder:text-gray4 outline-none`}
      />
      {error && (
        <p className="text-error font-pretendard text-regular-16 font-regular mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailForm;
