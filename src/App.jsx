import { useState } from "react";
import { soaps } from "/src/data/soaps";
import { useSettings } from "/src/context";
import Header from "/src/components/layout/header";
import List from "/src/components/layout/list";
import Button from "/src/components/ui/button";

const App = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const { toggleSettings } = useSettings();

  const handleCartUpdate = (cart) => {
    setCartTotal((prevCart) => prevCart + cart * 12);
  };

  return (
    <>
      <div className="box-border min-h-screen min-w-full bg-light-grey">
        <Header cartTotal={cartTotal} />
        <div className="sticky top-14 z-50 flex justify-end py-4 pl-2 pr-4 opacity-90 md:hidden">
          <Button size="small" title="Edit titles" onClick={toggleSettings} />
        </div>
        <List soaps={soaps} handleCartUpdate={handleCartUpdate} />
      </div>
    </>
  );
};
export default App;
