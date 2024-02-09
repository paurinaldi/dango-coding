const Link = ({ title, url }) => {
  return (
    <a
      className="cursor-pointer border-b border-light-green hover:border-dark-green"
      href={url ?? "#"}
    >
      {title}
    </a>
  );
};

export default Link;
