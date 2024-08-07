import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-rose-500 rounded-3xl"> 
      <ul className="flex items-center justify-between py-3 px-24">
        <Link to="/">
          <li className="text-2xl font-bold text-rose-50 hover:underline hover:scale-110 transition-all">Início</li>
        </Link>
        <Link to="/about">
          <li className="text-2xl font-bold text-rose-50 hover:underline hover:scale-110 transition-all">Quem somos</li>
        </Link>
        <Link to="/info">
          <li className="text-2xl font-bold text-rose-50 hover:underline hover:scale-110 transition-all">O que fazemos</li>
        </Link>
        <Link to="/contact">
          <li className="text-2xl font-bold text-rose-50 hover:underline hover:scale-110 transition-all">Contato</li>
        </Link>
      </ul>
    </nav>
  )
}