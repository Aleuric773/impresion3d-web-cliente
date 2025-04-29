import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function ComoFuncionaPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">¿Cómo Funciona Nuestro Servicio?</h1>

      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Paso 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="md:w-1/4 text-center mb-4 md:mb-0">
            <div className="text-6xl font-bold text-blue-600">1</div>
          </div>
          <div className="md:w-3/4 md:pl-6">
            <h2 className="text-2xl font-semibold mb-2">Sube tu Imagen</h2>
            <p className="text-gray-700 mb-4">
              Todo comienza con tu idea. Ve a nuestra sección de <Link href="/cotizador" className="text-blue-600 hover:underline">Cotizador Online</Link> y sube una imagen clara de la figura que deseas imprimir. Puede ser un boceto, una foto de referencia o cualquier imagen que represente tu concepto.
            </p>
            <p className="text-gray-700">
              No te preocupes si no tienes un modelo 3D, ¡nosotros nos encargamos de eso! Nuestro equipo analizará la imagen para entender la geometría y los detalles.
            </p>
          </div>
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="md:w-1/4 text-center mb-4 md:mb-0">
            <div className="text-6xl font-bold text-blue-600">2</div>
          </div>
          <div className="md:w-3/4 md:pl-6">
            <h2 className="text-2xl font-semibold mb-2">Selecciona Opciones y Obtén Cotización</h2>
            <p className="text-gray-700 mb-4">
              Una vez subida la imagen, te pediremos que indiques un tamaño aproximado (Pequeño, Mediano, Grande) para tener una referencia inicial. Luego, podrás elegir si deseas un acabado metálico especial mediante baño electrolítico (Oro, Plata o Cobre) o si prefieres la pieza sin baño.
            </p>
            <p className="text-gray-700">
              Con esta información, nuestro sistema te proporcionará una **cotización estimada** al instante. Esta estimación se basa en el tamaño y el tipo de baño seleccionado.
            </p>
          </div>
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="md:w-1/4 text-center mb-4 md:mb-0">
            <div className="text-6xl font-bold text-blue-600">3</div>
          </div>
          <div className="md:w-3/4 md:pl-6">
            <h2 className="text-2xl font-semibold mb-2">Confirmación y Fabricación</h2>
            <p className="text-gray-700 mb-4">
              Si estás de acuerdo con la cotización estimada, podrás proceder a confirmar tu pedido (este paso requerirá detalles adicionales y posiblemente un contacto para finalizar). Una vez confirmado, nuestro equipo de expertos creará el modelo 3D basado en tu imagen.
            </p>
            <p className="text-gray-700">
              Luego, imprimiremos la figura utilizando la tecnología 3D más adecuada para tu pieza. Si seleccionaste un baño metálico, aplicaremos cuidadosamente el proceso de electroplating para lograr el acabado deseado (Oro, Plata o Cobre).
            </p>
          </div>
        </div>

        {/* Paso 4 */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="md:w-1/4 text-center mb-4 md:mb-0">
            <div className="text-6xl font-bold text-blue-600">4</div>
          </div>
          <div className="md:w-3/4 md:pl-6">
            <h2 className="text-2xl font-semibold mb-2">Inspección y Envío</h2>
            <p className="text-gray-700 mb-4">
              Cada pieza pasa por un control de calidad para asegurar que cumple con nuestros estándares y tus expectativas. Verificamos la precisión de la impresión y la calidad del acabado metálico.
            </p>
            <p className="text-gray-700">
              Finalmente, empaquetamos tu figura cuidadosamente y te la enviamos a la dirección que nos indiques. ¡Pronto tendrás tu idea materializada en tus manos!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Tienes alguna duda?</h2>
          <p className="text-gray-600 mb-8">Si tienes preguntas sobre el proceso o necesitas ayuda, no dudes en contactarnos.</p>
          <Link href="/contacto">
            <Button className="mr-4">Contactar</Button>
          </Link>
          <Link href="/cotizador">
            <Button variant="secondary">Ir al Cotizador</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

