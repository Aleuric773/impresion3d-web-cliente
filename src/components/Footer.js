import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <div className="mb-4">
          {/* Podríamos añadir enlaces rápidos aquí si es necesario */}
          <Link href="/" className="px-3 hover:text-blue-600">Inicio</Link>
          <Link href="/cotizador" className="px-3 hover:text-blue-600">Cotizador</Link>
          <Link href="/como-funciona" className="px-3 hover:text-blue-600">Cómo Funciona</Link>
          <Link href="/contacto" className="px-3 hover:text-blue-600">Contacto</Link>
          {/* Añadir enlace a Política de Privacidad, Términos, etc. */}
        </div>
        <p>&copy; {currentYear} Impresión3D Pro. Todos los derechos reservados.</p>
        {/* Podríamos añadir iconos de redes sociales aquí */}
      </div>
    </footer>
  );
};

export default Footer;

