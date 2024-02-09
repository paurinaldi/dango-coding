const Card = ({ soap }) => {
  const { id, img, name, description, price } = soap;
  return (
    <div className="bg-slate-50 max-w-72 max-h-96 flex-col p-6 shadow-xl rounded-md border border-bluish-purple">
      <img
        className="w-full h-28 object-cover rounded-lg"
        key={id}
        src={img}
        alt={name}
      />
      <h2>{name}</h2>
      <div className="flex items-center">
        <p>{price}</p>
        <input type="number" className="min-w-full" />
      </div>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Card;
