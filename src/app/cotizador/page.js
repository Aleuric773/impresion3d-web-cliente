"use client";

import React, { useState, useEffect } from 'react';
import ImageUpload from '@/components/ImageUpload';
import ServiceTypeSelection from '@/components/ServiceTypeSelection'; // Importar selección de servicio
import SizeSelection from '@/components/SizeSelection';
import PlatingOptions from '@/components/PlatingOptions';
import Button from '@/components/Button';

export default function CotizadorPage() {
  // Estados para las selecciones del usuario
  const [selectedService, setSelectedService] = useState('print_plate'); // Por defecto 'Impresión + Baño'
  const [selectedImage, setSelectedImage] = useState(null); // Placeholder
  const [selectedSize, setSelectedSize] = useState('M'); // Por defecto 'Mediano'
  const [selectedPlating, setSelectedPlating] = useState('none'); // Por defecto 'Sin Baño'
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  // --- Lógica de Precios Estimados (Basada en info de mercado y tamaño) ---
  const calculatePrice = (service, size, plating) => {
    let basePrintPrice = 0;
    // Precios base estimados para impresión 3D (resina, incluyendo modelado básico desde imagen)
    switch (size) {
      case 'S': basePrintPrice = 45; break; // Pequeño (<10cm)
      case 'M': basePrintPrice = 90; break; // Mediano (10-20cm)
      case 'L': basePrintPrice = 200; break; // Grande (>20cm)
      default: basePrintPrice = 90; // Default a Mediano
    }

    let platingCost = 0;
    // Costo adicional estimado para electroplating (depende del tamaño y metal)
    if (plating !== 'none') {
        switch (size) {
            case 'S':
                if (plating === 'copper') platingCost = 15;
                else if (plating === 'silver') platingCost = 30;
                else if (plating === 'gold') platingCost = 60;
                break;
            case 'M':
                if (plating === 'copper') platingCost = 30;
                else if (plating === 'silver') platingCost = 60;
                else if (plating === 'gold') platingCost = 120;
                break;
            case 'L':
                if (plating === 'copper') platingCost = 50;
                else if (plating === 'silver') platingCost = 100;
                else if (plating === 'gold') platingCost = 200;
                break;
            default:
                platingCost = 0;
        }
    }

    let totalPrice = 0;
    if (service === 'print_only') {
      totalPrice = basePrintPrice;
    } else if (service === 'print_plate') {
      // Si es 'print_plate' pero no se ha seleccionado baño, mostrar solo precio base
      totalPrice = basePrintPrice + (plating === 'none' ? 0 : platingCost);
    } else if (service === 'plate_only') {
      // Lógica para 'solo baño' (requeriría más info, como dimensiones/superficie)
      // Por ahora, podemos poner un placeholder o un mensaje
      totalPrice = platingCost; // O un precio base diferente para solo baño
      // Podríamos necesitar deshabilitar la selección de tamaño si es solo baño
    }

    // Solo calcula si hay un tamaño seleccionado (y servicio)
    if (size && service) {
        // Si es print_plate y no hay baño seleccionado, no mostrar precio aún?
        if (service === 'print_plate' && plating === 'none') {
             setEstimatedPrice(null); // O mostrar solo el basePrice
        } else {
             setEstimatedPrice(totalPrice.toFixed(2));
        }
       
    } else {
        setEstimatedPrice(null);
    }
  };
  // ----------------------------------------------------------------------

  // Recalcular precio cuando cambien las selecciones
  useEffect(() => {
    calculatePrice(selectedService, selectedSize, selectedPlating);
  }, [selectedService, selectedSize, selectedPlating]);

  // Manejadores de cambio
  const handleServiceChange = (serviceId) => {
    setSelectedService(serviceId);
    // Si cambian a 'print_only', resetear el baño a 'none'
    if (serviceId === 'print_only') {
      setSelectedPlating('none');
    }
  };
  const handleSizeChange = (sizeId) => {
    setSelectedSize(sizeId);
  };
  const handlePlatingChange = (platingId) => {
    setSelectedPlating(platingId);
  };

  // Simula la obtención de la cotización
  const handleGetQuote = () => {
    let message = `Cotización estimada: ${estimatedPrice} €\n`;
    message += `Servicio: ${selectedService === 'print_only' ? 'Solo Impresión' : 'Impresión + Baño'}\n`;
    message += `Tamaño: ${selectedSize}\n`;
    if (selectedService === 'print_plate') {
      message += `Baño: ${selectedPlating}\n`;
    }
    message += '\nContactaremos para confirmar detalles y precio final basado en la imagen subida.';
    alert(message);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Cotizador de Impresión 3D y Baños Metálicos</h1>
      <p className="mb-8 text-center text-gray-600">Sigue estos pasos para obtener una cotización estimada.</p>
      
      <div className="max-w-lg mx-auto space-y-6">
        {/* Paso 1: Tipo de Servicio */}
        <ServiceTypeSelection 
            selectedService={selectedService}
            onServiceChange={handleServiceChange}
        />

        {/* Paso 2: Subir Imagen */}
        <ImageUpload /> 
        {/* Nota: La imagen subida no afecta el precio *estimado* aquí, pero sí el final */}
        
        {/* Paso 3: Selección de Tamaño */}
        <SizeSelection 
          selectedSize={selectedSize} 
          onSizeChange={handleSizeChange} 
        />

        {/* Paso 4: Selección de Baño (solo si aplica) */}
        {selectedService === 'print_plate' && (
            <PlatingOptions 
              selectedPlating={selectedPlating} 
              onPlatingChange={handlePlatingChange} 
            />
        )}
      </div>

      {/* Sección de Cotización Estimada */}
      <div className="mt-10 p-6 border rounded-lg shadow-lg bg-blue-50 max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Tu Cotización Estimada</h2>
          {estimatedPrice !== null ? (
            <p className="text-3xl font-bold text-blue-700 mb-4">{estimatedPrice} €</p>
          ) : (
            <p className="text-gray-700 mb-4">
              {selectedService === 'print_plate' && selectedPlating === 'none' 
                ? 'Selecciona una opción de baño para ver la estimación.' 
                : 'Completa los pasos para ver la estimación.'}
            </p>
          )}
          <p className="text-sm text-gray-600 mb-6">Esta es una estimación inicial basada en el tamaño. El precio final dependerá de la complejidad del modelo 3D creado a partir de tu imagen y los detalles del baño. Nos pondremos en contacto para confirmar.</p>
          <Button 
            onClick={handleGetQuote} 
            disabled={!estimatedPrice || (selectedService === 'print_plate' && selectedPlating === 'none')}
          >
            Confirmar Opciones y Continuar
          </Button>
      </div>

    </div>
  );
}

