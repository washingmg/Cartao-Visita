function ButtonLink({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="w-full text-center bg-indigo-900 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
    > {link.title} </a>
  );
}

export default ButtonLink;