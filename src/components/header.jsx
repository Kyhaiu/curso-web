import { Link } from "react-router-dom";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/curso-web">Curso Web</Link> {/* NOVO LINK */}
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? "🌙 Escuro" : "🌞 Claro"}
        </button>
      </nav>
    </header>
  );
}
