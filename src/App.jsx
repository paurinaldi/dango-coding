import List from "/src/components/sections/list";
import Header from "/src/components/sections/header";
import { SettingsProvider } from "./context";

const App = () => {
  return (
    <SettingsProvider>
      <Header />
      <div className="box-border min-h-screen min-w-full bg-light-grey p-20">
        <List />
      </div>
    </SettingsProvider>
  );
};

export default App;
