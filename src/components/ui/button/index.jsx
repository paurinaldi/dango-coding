const Button = ({ title, onClick, size }) => {
  const padding = size == "small" ? "text-sm px-2 py-1 md:px-4 sm:py-2" : "";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded bg-light-brown px-4 py-2 font-bold text-slate-50 drop-shadow-md hover:bg-darker-brown ${padding} `}
    >
      {title}
    </button>
  );
};

export default Button;
