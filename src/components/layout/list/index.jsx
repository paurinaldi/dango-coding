import Card from "/src/components/ui/card";

const List = ({ soaps, handleCartUpdate }) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="grid min-w-48 grid-cols-1 gap-10 py-4 md:grid-cols-2 md:py-6 lg:grid-cols-3 xl:grid-cols-4">
        {soaps.map((soap) => (
          <Card handleCartUpdate={handleCartUpdate} key={soap.id} soap={soap} />
        ))}
      </div>
    </div>
  );
};
export default List;
