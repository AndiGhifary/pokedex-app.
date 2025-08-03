import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { getPokemonList } from '../api';

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonList();
      setPokemonList(data);
      setLoading(false);
    };
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-bold text-gray-700 animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Cari Pokemon..."
        className="w-full p-2 mb-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredPokemon.map((pokemon, index) => (
          // Tambahkan key dan index untuk animasi
          <div key={pokemon.name} className={`animate-fade-in-up delay-${index * 100}`}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;