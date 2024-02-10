import { useSettings } from "/src/context";
import Button from "../../ui/button";
import CartIcon from "/src/components/ui/icons/cartIcon";

const Header = ({ cartTotal }) => {
  const { toggleSettings } = useSettings();

  return (
    <header className="sticky top-0 z-50 flex min-w-full justify-around bg-dark-green px-2 py-4 text-slate-50 drop-shadow-md sm:justify-between md:px-12">
      <h1 className="self-baseline text-xl font-semibold drop-shadow-lg sm:text-2xl md:text-3xl">
        Tourmaline Soaps
      </h1>
      <div className="flex-start flex items-center justify-around text-xs sm:w-1/4">
        <div className="m-1 flex items-center gap-3  self-end">
          <CartIcon />
          <span className="p-1 text-xs font-semibold text-slate-50 sm:text-sm">
            {`$: ${cartTotal}`}
          </span>
        </div>
        <div className="hidden md:block">
          <Button size="small" title="Edit titles" onClick={toggleSettings} />
        </div>
      </div>
    </header>
  );
};

export default Header;
