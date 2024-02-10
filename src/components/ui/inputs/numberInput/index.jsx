const NumberInput = ({ value, onChange, name }) => (
  <input
    name={name}
    type="number"
    min={1}
    value={value}
    onChange={onChange}
    className="max-w-12 rounded-md border border-lightest-brown border-opacity-40 text-center focus:outline-none"
  />
);

export default NumberInput;
