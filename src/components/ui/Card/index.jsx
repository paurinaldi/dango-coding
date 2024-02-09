import { useState } from "react";
import { useSettings } from "/src/context";
import Button from "/src/components/ui/button";
import Input from "/src/components/ui/input";
import TitleEditor from "/src/components/ui/titleEditor";
import validateTitle from "/src/utils";

const Card = ({ soap }) => {
  const { showSettings } = useSettings();

  const { id, img, name, description, price } = soap;

  const [title, setTitle] = useState(name);
  const [error, setError] = useState(false);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);
  const [fontSize, setFontSize] = useState("18px");

  const handleTitleChange = (event) => {
    const newTitle = event.target.value.trim();
    const { error, isTextOverflowing } = validateTitle(newTitle);
    setError(error);
    setIsTextOverflowing(isTextOverflowing);

    if (!error || !isTextOverflowing) setTitle(newTitle);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(`${event.target.value}px`);
  };

  return (
    <div className="flex max-h-fit max-w-72 flex-col items-center justify-center space-y-5 rounded-md border border-light-green bg-slate-50 p-6 shadow-xl">
      <img
        className="h-28 w-full rounded-lg object-cover"
        key={id}
        src={img}
        alt={name}
      />
      <div className="line-clamp-2 min-h-14 break-words">
        <h2
          className={`text-lg font-bold text-dark-green ${
            isTextOverflowing ? "overflow-clip" : ""
          }`}
          style={{ fontSize: fontSize }}
        >
          {title}
        </h2>
      </div>
      <div className="flex w-full justify-around border-t border-light-green p-4">
        <p className="text-lg font-semibold">${price}</p>
        <Input />
      </div>
      <p className="pb-5 text-sm">{description}</p>
      <Button title={"Add to cart"} />
      <a
        className="cursor-pointer border-b border-light-green hover:border-dark-green"
        href="#"
      >
        Learn more
      </a>
      {showSettings && (
        <TitleEditor
          onChange={handleTitleChange}
          error={error}
          isTextOverflowing={isTextOverflowing}
          fontSize={fontSize}
          onFontSizeChange={handleFontSizeChange}
        />
      )}
    </div>
  );
};

export default Card;
