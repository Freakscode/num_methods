import React from 'react';
import logo from '../imgs/OIG.jpg'

function Navbar() {
  return (
    <nav className="w-screen bg-neutral text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
          <span className="text-6xl font-sans px-5 ml-2"><a href='/'>MetNum</a></span>
        </div>

        {/* Botones de navegación */}
        <ul className="flex space-x-16">
          <li>
            <a href="/" className="hover:text-blue-300 text-4xl">Home</a>
          </li>
          <li>
            <a href="/tecnologias" className="hover:text-blue-300 text-4xl">Tecnologías Usadas</a>
          </li>
          <li>
            <a href="/acerca" className="hover:text-blue-300 text-4xl text">Acerca de</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
