import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonDetails } from '../api';

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getPokemonDetails(id);
        setPokemon(data);
      } catch (error) {
        console.error("Failed to fetch Pokemon details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-xl font-bold text-gray-700 animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-xl font-bold text-gray-700">Pokemon not found</div>
      </div>
    );
  }
  
  const mainType = pokemon.types[0].type.name;
  const mainColorClass = `bg-pokemon-${mainType}`;

  return (
    <div className="mx-auto p-4 animate-fade-in-up"> 
      <div className={`relative ${mainColorClass} rounded-3xl overflow-hidden shadow-2xl p-6`}>
        {/* Latar belakang dengan pattern dari API */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.freecodecamp.org/news/content/images/2021/04/pokedex-background.png')] bg-cover bg-center opacity-30"></div>

        {/* Header dengan tombol kembali, nama, dan nomor pokemon */}
        <div className="relative z-30 flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/" className="text-black text-lg font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            {/* Mengubah warna nama Pokemon menjadi hitam */}
            <h1 className="capitalize text-black text-2xl font-bold ml-2">{pokemon.name}</h1>
          </div>
          {/* Mengubah warna nomor Pokemon menjadi hitam */}
          <span className="text-black text-lg font-bold">#{pokemon.id.toString().padStart(3, '0')}</span>
        </div>

        {/* Gambar Pokemon */}
        <div className="relative z-20 flex justify-center mt-[-3rem]">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="w-48 h-48 filter drop-shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Card Detail Putih */}
        <div className="relative z-10 bg-white rounded-3xl p-6 shadow-xl -mt-16 pt-20">
          <div className="text-center mb-6">
            <div className="flex justify-center space-x-2">
              {pokemon.types.map(typeInfo => (
                <span key={typeInfo.type.name} className={`px-4 py-1 text-xs font-bold text-black uppercase rounded-full bg-pokemon-${typeInfo.type.name} shadow-sm`}>
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-6">
            <span className={`text-lg font-bold capitalize text-pokemon-${mainType}`}>About</span>
          </div>

          <div className="flex justify-around text-center mb-6">
            <div>
              <p className="text-gray-500 text-sm">Berat</p>
              <p className="font-semibold text-gray-800">{pokemon.weight / 10} kg</p>
            </div>
            <div className="flex-1 text-center border-l border-r border-gray-200">
              <p className="text-gray-500 text-sm">Tinggi</p>
              <p className="font-semibold text-gray-800">{pokemon.height / 10} m</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-gray-500 text-sm">Abilities</p>
              <p className="font-semibold text-gray-800 capitalize">
                {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className={`text-black text-center text-lg font-bold mb-4 capitalize text-pokemon-${mainType}`}>Base Stats</h3>
            {pokemon.stats.map(statInfo => (
              <div key={statInfo.stat.name} className="flex items-center mb-2">
                <span className="w-1/4 font-semibold text-gray-600 capitalize">{statInfo.stat.name}</span>
                <span className="w-1/6 text-right font-bold text-gray-800">{statInfo.base_stat}</span>
                <div className="w-full h-2 rounded-full mx-4 bg-gray-200">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${statInfo.base_stat > 50 ? `bg-green-500` : `bg-red-500`}`}
                    style={{ width: `${Math.min(statInfo.base_stat, 100)}%` }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
