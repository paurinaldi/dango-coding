const TitleEditor = ({
  onChange,
  error,
  isTextOverflowing,
  fontSize,
  onFontSizeChange,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 border-t border-light-green pt-5">
      <span className="text-md pb-5 font-semibold text-dark-green">
        Edit Title
      </span>
      <textarea
        type="input"
        placeholder="Type to change title"
        onChange={onChange}
        className="break-all rounded-md border border-lightest-brown border-opacity-40 text-center focus:outline-none"
      />
      <span
        className={
          error ? "pt-2 text-xs text-red-700" : "invisible pt-2 text-xs"
        }
      >
        {isTextOverflowing
          ? "Words must be up to 15 characters long"
          : "Title must be up to 40 characters long"}
      </span>
      <label htmlFor="fontSizeRange" className="text-sm text-dark-green">
        Font size
      </label>
      <input
        type="range"
        id="fontSizeRange"
        min="12"
        max="24"
        step="1"
        value={parseInt(fontSize)}
        onChange={onFontSizeChange}
        className="h-1 w-3/4 cursor-pointer appearance-none rounded-lg bg-light-green bg-opacity-50 accent-dark-green"
      />
    </div>
  );
};

export default TitleEditor;
