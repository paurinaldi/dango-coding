import { useSettings } from "/src/context";
import Button from "../../ui/button";

const Header = () => {
  const { toggleSettings } = useSettings();

  return (
    <header className="fixed flex min-w-full justify-between bg-dark-green px-4 py-4 text-light-grey md:px-28">
      <h1 className="text-2xl font-semibold">Tourmaline Soaps</h1>
      <div className="text-xs">
        <Button title={"Edit titles"} onClick={toggleSettings} />
      </div>
    </header>
  );
};

export default Header;
