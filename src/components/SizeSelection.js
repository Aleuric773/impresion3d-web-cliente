import React from 'react';

const SizeSelection = ({ selectedSize, onSizeChange }) => {
  const sizes = [
    { id: 'S', name: 'Pequeño (aprox. < 10cm)' },
    { id: 'M', name: 'Mediano (aprox. 10-20cm)' },
    { id: 'L', name: 'Grande (aprox. > 20cm)' },
  ];

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Selecciona el Tamaño Aproximado</h2>
      <p className="text-sm text-gray-500 mb-3">Esto nos ayuda a darte una mejor estimación inicial.</p>
      <div className="space-y-2">
        {sizes.map((size) => (
          <label key={size.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <input
              type="radio"
              name="sizeOption"
              value={size.id}
              checked={selectedSize === size.id}
              onChange={() => onSizeChange(size.id)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700">{size.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;

