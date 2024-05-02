import React from 'react';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-5xl text-blue-900 font-bold mb-6">
        Bienvenue sur Notre Site!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Découvrez nos services et produits exceptionnels.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          En savoir plus
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Contactez-nous
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
