function ButtonLink({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="w-full text-center bg-[#214d44] text-white py-4 rounded-full font-medium hover:bg-[#167e69] transition "
    > {link.title} </a>
  );
}

export default ButtonLink;