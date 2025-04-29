import Link from 'next/link';
import Button from '@/components/Button'; // Importa el componente Button

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicio Profesional de Impresión 3D</h1>
        <p className="text-lg md:text-xl mb-8">Transformamos tus ideas en objetos reales con impresión 3D de alta calidad y acabados metálicos.</p>
        <Link href="/cotizador">
          <Button variant="secondary" className="text-lg">Obtener Cotización Instantánea</Button>
        </Link>
      </section>

      {/* Features/Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Image to 3D Model */}
            <div className="p-6 border rounded-lg shadow-md">
              {/* Icon Placeholder */}
              <div className="text-blue-600 mb-4">[Icono Imagen a 3D]</div> 
              <h3 className="text-xl font-semibold mb-2">De Imagen a Realidad</h3>
              <p className="text-gray-600">Sube una imagen de tu idea y nosotros nos encargamos de crear el modelo 3D listo para imprimir.</p>
            </div>
            {/* Service 2: 3D Printing */}
            <div className="p-6 border rounded-lg shadow-md">
              {/* Icon Placeholder */}
              <div className="text-blue-600 mb-4">[Icono Impresora 3D]</div>
              <h3 className="text-xl font-semibold mb-2">Impresión 3D de Precisión</h3>
              <p className="text-gray-600">Utilizamos tecnología avanzada para imprimir tus figuras con alta definición y materiales resistentes.</p>
            </div>
            {/* Service 3: Metal Plating */}
            <div className="p-6 border rounded-lg shadow-md">
              {/* Icon Placeholder */}
              <div className="text-blue-600 mb-4">[Icono Baño Metálico]</div>
              <h3 className="text-xl font-semibold mb-2">Acabados Metálicos Premium</h3>
              <p className="text-gray-600">Ofrecemos baños electrolíticos en Oro, Plata y Cobre para darle un toque único y duradero a tus piezas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section (Simplified) */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">¿Cómo Funciona?</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <h4 className="font-semibold mb-1">Sube tu Imagen</h4>
              <p className="text-sm text-gray-600">Envíanos la imagen de tu idea.</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <h4 className="font-semibold mb-1">Recibe Cotización</h4>
              <p className="text-sm text-gray-600">Obtén una estimación basada en tamaño y acabado.</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <h4 className="font-semibold mb-1">Fabricamos</h4>
              <p className="text-sm text-gray-600">Modelamos, imprimimos y bañamos tu pieza.</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <h4 className="font-semibold mb-1">Recibe tu Pedido</h4>
              <p className="text-sm text-gray-600">Enviamos la figura terminada a tu domicilio.</p>
            </div>
          </div>
          <Link href="/como-funciona" className="mt-8 inline-block">
            <Button>Ver Proceso Detallado</Button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-gray-600 mb-8">Obtén una cotización instantánea para tu proyecto de impresión 3D.</p>
        <Link href="/cotizador">
          <Button className="text-lg">Ir al Cotizador</Button>
        </Link>
      </section>
    </div>
  );
}

