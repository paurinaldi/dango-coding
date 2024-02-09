import { useSettings } from "../../../context";
import Link from "../link";
import Button from "/src/components/ui/button";
import Input from "/src/components/ui/input";
import { useState } from "react";

const Card = ({ soap }) => {
  const { id, img, name, description, price } = soap;
  const { showSettings } = useSettings();

  const [title, setTitle] = useState(name);
  const [error, setError] = useState(false);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 40) {
      setTitle(newTitle);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-5 bg-slate-50 max-w-72 max-h-fit p-6 shadow-xl rounded-md border border-light-green">
      <img
        className="w-full h-28 object-cover rounded-lg"
        key={id}
        src={img}
        alt={name}
      />
      <div className="min-h-14">
        <h2 className="text-lg font-bold text-dark-green break-words">
          {title}
        </h2>
      </div>
      <div className="flex w-full justify-around border-t border-light-green p-4">
        <p className="text-lg font-semibold">${price}</p>
        <Input />
      </div>
      <p className="text-sm pb-5">{description}</p>
      <Button title={"Add to cart"} />
      <Link title={"Learn more"} src="#" />
      {showSettings && (
        //TODO: Move to another component? Link comp neccessary?
        <div className="flex flex-col">
          <textarea
            type="input"
            placeholder={"Type to change title"}
            onChange={handleTitleChange}
            className="border-lightest-brown border border-opacity-40 rounded-md text-center focus:outline-none"
          />
          <span
            className={
              error ? "text-xs text-red-700 pt-2" : "invisible text-xs pt-2"
            }
          >
            Title must be up to 40 characters long
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;
