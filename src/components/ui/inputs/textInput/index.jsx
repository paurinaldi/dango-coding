const TextInput = ({ onChange, error, placeholder, errorMsg }) => (
  <>
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="w-100 break-all rounded-md border border-lightest-brown border-opacity-40 p-2 text-center text-sm focus:outline-none"
    />
    <span
      className={error ? "pt-2 text-xs text-red-700" : "invisible pt-2 text-xs"}
    >
      {errorMsg}
    </span>
  </>
);

export default TextInput;
