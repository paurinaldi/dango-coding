import { soaps } from "/src/data/soaps";
import Card from "/src/components/ui/card";

const List = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="grid min-w-48 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {soaps.map((soap) => (
          <Card key={soap.id} soap={soap} />
        ))}
      </div>
    </div>
  );
};

// falta suma de cosas del carrito

export default List;
