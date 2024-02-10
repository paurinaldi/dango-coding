const RangeInput = ({ onChange, max, min, id, value }) => (
  <>
    <label htmlFor="fontSizeRange" className="pt-2 text-sm text-dark-green">
      Font size
    </label>
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      step="1"
      value={value}
      onChange={onChange}
      className="m-3 h-1 w-3/4 cursor-pointer appearance-none rounded-lg bg-light-green bg-opacity-50 accent-dark-green"
    />
  </>
);

export default RangeInput;
