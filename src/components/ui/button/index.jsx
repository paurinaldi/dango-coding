const Button = ({ title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded bg-light-brown px-4 py-2 font-bold text-slate-50 hover:bg-darker-brown"
    >
      {title}
    </button>
  );
};

export default Button;
