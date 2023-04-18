import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <a>
          <li>Home</li>
        </a>
        <a>
          <li>Sobre</li>
        </a>
        <a>
          <li>Contato</li>
        </a>

        <button>Login</button>
        <button>Cadastre-se</button>
      </ul>
    </nav>
  );
}

export default NavBar;
