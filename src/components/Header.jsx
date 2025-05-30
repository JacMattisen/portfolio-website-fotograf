import { useState } from 'react';
import './Header.css'; 


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <h1>AMaria Fotografia</h1>

      <button className="menu-button" onClick={toggleMenu} aria-label="Abrir menu">
        ☰
      </button>

      <nav className={menuOpen ? 'active' : ''}>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>
    </header>
  );
}

export default Header;
// Header.jsx
