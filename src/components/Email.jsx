const EmailForm = ({ email, error, onChangeEmail }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <input
        type="email"
        value={email}
        onChange={e => onChangeEmail(e.target.value)}
        placeholder="이메일을 입력해주세요."
        className={`bg-gray1 font-pretendard font-regular-16 w-full max-w-[720px] rounded-md px-4 py-3 outline-none`}
        style={{
          color: 'var(--color-gray5)',
          border: '1px solid',
          borderColor: error ? 'var(--color-error)' : 'var(--border-gray3)',
        }}
      />
      {error && (
        <p
          className="font-pretendard font-regular-16 mt-1"
          style={{ color: 'var(--color-error)' }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailForm;
