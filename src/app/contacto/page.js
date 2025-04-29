"use client";

import React from 'react';
import Button from '@/components/Button';

export default function ContactoPage() {
  // En una aplicación real, manejaríamos el estado del formulario y el envío
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el formulario (p.ej., a una API)
    alert('Formulario enviado (simulación). Gracias por contactarnos.');
    // Limpiar formulario si es necesario
    event.target.reset();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contacto</h1>
      <p className="mb-10 text-center text-gray-600">¿Tienes preguntas, necesitas ayuda con un pedido o quieres discutir un proyecto especial? ¡Contáctanos!</p>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <Button type="submit">
              Enviar Mensaje
            </Button>
          </div>
        </form>
      </div>

      {/* Opcional: Añadir otra información de contacto (teléfono, dirección, mapa) */}
      <div className="mt-10 text-center text-gray-600">
        <p>También puedes contactarnos por teléfono al <a href="tel:+34000000000" className="text-blue-600 hover:underline">+34 000 000 000</a> o por email a <a href="mailto:trayhardbuenisimo@gmail.com" className="text-blue-600 hover:underline">trayhardbuenisimo@gmail.com</a>.</p>
      </div>
    </div>
  );
}

