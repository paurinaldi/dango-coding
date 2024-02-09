const Button = ({ title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-light-brown hover:bg-darker-brown text-slate-50 font-bold py-2 px-4 rounded"
    >
      {title}
    </button>
  );
};

export default Button;
