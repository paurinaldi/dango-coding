import { soaps } from "../../../data/soaps";
import Card from "../../ui/Card";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 min-w-48 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4">
        {soaps.map((soap) => (
          <Card key={soap.id} soap={soap} />
        ))}
      </div>
    </div>
  );
};

export default Home;
