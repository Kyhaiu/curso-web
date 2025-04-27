import { Link } from "react-router-dom";
import {
  FiMoon,
  FiSun,
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header>
      <nav>
        <Link to="/">
          <FiHome /> Home
        </Link>
        <Link to="/about">
          <FiUser /> Sobre
        </Link>
        <Link to="/projects">
          <FiBriefcase /> Projetos
        </Link>
        <Link to="/contact">
          <FiMail /> Contato
        </Link>

        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </nav>
    </header>
  );
}
