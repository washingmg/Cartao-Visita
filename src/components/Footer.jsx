export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-0 text-sm text-gray-900 text-center ">
      © {year} Washington Medeiros. Todos os direitos reservados.
    </footer>
  );
}
