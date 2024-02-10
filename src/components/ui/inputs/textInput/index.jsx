const TextInput = ({ onChange, placeholder }) => (
  <>
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="w-100 break-all rounded-md border border-lightest-brown border-opacity-40 p-2 text-center text-sm focus:outline-none"
    />
  </>
);

export default TextInput;
