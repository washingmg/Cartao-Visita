export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-sm text-gray-900 text-center">
      © {year} Washington Medeiros. Todos os direitos reservados.
    </footer>
  )
}
