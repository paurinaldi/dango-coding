import { soaps } from "../../../data/soaps";
import Card from "../../ui/card";

const List = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 min-w-48 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {soaps.map((soap) => (
          <Card key={soap.id} soap={soap} />
        ))}
      </div>
    </div>
  );
};

// falta suma de cosas del carrito

export default List;
