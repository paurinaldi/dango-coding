import List from "./components/sections/list";
import Header from "./components/sections/header";
import { SettingsProvider } from "./context";

const App = () => {
  return (
    <SettingsProvider>
      <Header />
      <div className="bg-light-grey box-border min-h-screen min-w-full p-20">
        <List />
      </div>
    </SettingsProvider>
  );
};

export default App;
