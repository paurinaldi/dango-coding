import TextInput from "/src/components/ui/inputs/textInput";
import RangeInput from "/src/components/ui/inputs/rangeInput";

const TitleEditor = ({
  onChange,
  error,
  fontSize,
  handleFontSizeChange,
  fontSizeRange,
}) => {
  const fontValue = fontSizeRange.indexOf(fontSize);
  return (
    <div className="flex flex-col items-center gap-2 border-t border-light-green pt-5">
      <span className="text-md font-semibold text-dark-green">Edit Title</span>
      <TextInput
        placeholder={"Type to change title"}
        onChange={onChange}
        error={error}
        errorMsg={"Title must be up to 40 characters long"}
      />
      <RangeInput
        id={"fontSizeRange"}
        min={0}
        max={fontSizeRange.length - 1}
        onChange={(e) => handleFontSizeChange(fontSizeRange[e.target.value])}
        value={fontValue}
      />
    </div>
  );
};

export default TitleEditor;
