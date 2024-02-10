import { useState, useEffect } from "react";
import { useSettings } from "/src/context";
import Button from "/src/components/ui/button";
import NumberInput from "/src/components/ui/inputs/numberInput";
import TitleEditor from "/src/components/ui/titleEditor";

const Card = ({ soap, handleCartUpdate }) => {
  const { showSettings } = useSettings();

  const { id, img, name, description, price, quantity } = soap;

  const [productQuantity, setProductQuantity] = useState(quantity);
  const [title, setTitle] = useState(name);
  const [error, setError] = useState(false);
  const [submitCart, setSubmitCart] = useState(false);
  const [fontSize, setFontSize] = useState("text-xl");

  const fontSizeRange = ["text-sm", "text-base", "text-lg", "text-xl"];

  const handleTitleChange = (event) => {
    const newTitle = event.target.value.trim();
    if (newTitle.length > 40) {
      setError(true);
    } else {
      setTitle(newTitle);
      setError(false);
    }
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const handleAddToCart = () => {
    setSubmitCart(true);
    if (productQuantity > 0) {
      handleCartUpdate(productQuantity);
    }
  };

  useEffect(() => {
    if (submitCart) {
      setProductQuantity(quantity);
      setSubmitCart(false);
    }
  }, [submitCart, quantity]);

  return (
    <div className="flex max-h-fit max-w-72 flex-col items-center justify-center space-y-5 rounded-md border border-light-green border-opacity-50 bg-slate-50 p-6 shadow-xl hover:shadow-2xl">
      <img
        className="h-28 w-full rounded-lg object-cover"
        key={id}
        src={img}
        alt={name}
      />
      <div className="min-h-14">
        <h2
          className={`line-clamp-2 max-w-56  overflow-hidden break-words ${fontSize} font-bold text-dark-green`}
        >
          {title}
        </h2>
      </div>
      <div className="flex w-full justify-around border-t border-light-green p-4">
        <p className="text-lg font-semibold">${price}</p>
        <NumberInput
          onChange={(event) =>
            setProductQuantity(parseInt(event.target.value, 10))
          }
          value={productQuantity}
          name={"quantity"}
        />
      </div>
      <p className="pb-5 text-sm">{description}</p>
      <Button onClick={handleAddToCart} title={"Add to cart"} />
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
          fontSize={fontSize}
          handleFontSizeChange={handleFontSizeChange}
          fontSizeRange={fontSizeRange}
        />
      )}
    </div>
  );
};

export default Card;
