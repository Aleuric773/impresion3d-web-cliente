import React from 'react';

const ServiceTypeSelection = ({ selectedService, onServiceChange }) => {
  const services = [
    { id: 'print_only', name: 'Solo Impresión 3D' },
    { id: 'print_plate', name: 'Impresión 3D + Baño Metálico' },
    // { id: 'plate_only', name: 'Solo Baño Metálico (para piezas existentes)' } // Opción futura
  ];

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Selecciona el Servicio</h2>
      <div className="space-y-2">
        {services.map((service) => (
          <label key={service.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
            <input
              type="radio"
              name="serviceOption"
              value={service.id}
              checked={selectedService === service.id}
              onChange={() => onServiceChange(service.id)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700">{service.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ServiceTypeSelection;

