import React from 'react';

const PlatingOptions = ({ selectedPlating, onPlatingChange }) => {
  const platingTypes = [
    { id: 'none', name: 'Sin Baño', priceFactor: 1.0 },
    { id: 'copper', name: 'Cobre', priceFactor: 1.2 }, // Placeholder price factor
    { id: 'silver', name: 'Plata', priceFactor: 1.5 }, // Placeholder price factor
    { id: 'gold', name: 'Oro', priceFactor: 2.0 }    // Placeholder price factor
  ];

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Selecciona el Baño Metálico</h2>
      <div className="space-y-2">
        {platingTypes.map((plating) => (
          <label key={plating.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <input
              type="radio"
              name="platingOption"
              value={plating.id}
              checked={selectedPlating === plating.id}
              onChange={() => onPlatingChange(plating.id)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700">{plating.name}</span>
            {/* Podríamos añadir indicación de precio relativo aquí */}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PlatingOptions;

