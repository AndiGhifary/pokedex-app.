import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center shadow-lg">
      <Link to="/">
        <h1 className="text-3xl font-bold font-sans tracking-wider text-black">
          Pokedex App
        </h1>
      </Link>
    </header>
  );
};

export default Header;