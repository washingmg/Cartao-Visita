export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-0 text-sm text-gray-500 text-center ">
      © {year} Washington Medeiros. Todos os direitos reservados.
    </footer>
  );
}
