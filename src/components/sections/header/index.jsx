import { useSettings } from "/src/context";
import Button from "../../ui/button";

const Header = () => {
  const { toggleSettings } = useSettings();

  return (
    <header className="bg-dark-green text-light-grey justify-between px-4 flex fixed min-w-full md:px-28 py-4">
      <h1 className="text-2xl font-semibold">Tourmaline Soaps</h1>
      <div className="text-xs">
        <Button title={"Edit titles"} onClick={toggleSettings} />
      </div>
    </header>
  );
};

export default Header;
