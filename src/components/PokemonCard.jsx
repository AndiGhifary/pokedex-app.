import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <div className="bg-white rounded-lg shadow-md p-4 m-2 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src={imageUrl} alt={pokemon.name} className="mx-auto w-24 h-24" />
        <h3 className="capitalize text-lg font-semibold mt-2">{pokemon.name}</h3>
      </div>
    </Link>
  );
};

export default PokemonCard;