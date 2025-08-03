// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import PokemonDetailsPage from './pages/PokemonDetailsPage.jsx';

const App = () => {
  return (
    <Router>
      {/* Mengatur min-h-screen di sini agar setiap halaman dapat mengisi tinggi layar */}
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="py-8 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;