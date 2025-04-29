import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          {/* Placeholder para el logo */}
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
            Impresión3D Pro
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/cotizador" className="py-2 px-3 text-gray-700 hover:text-blue-600 rounded">
            Cotizador Online
          </Link>
          {/* <Link href="/modelado-3d" className="py-2 px-3 text-gray-700 hover:text-blue-600 rounded">
            Modelado 3D
          </Link> */}
          <Link href="/como-funciona" className="py-2 px-3 text-gray-700 hover:text-blue-600 rounded">
            ¿Cómo Funciona?
          </Link>
          {/* <Link href="/blog" className="py-2 px-3 text-gray-700 hover:text-blue-600 rounded">
            Blog
          </Link> */}
          <Link href="/contacto" className="py-2 px-3 text-gray-700 hover:text-blue-600 rounded">
            Contacto
          </Link>
          {/* Añadir enlaces a Tienda, Cuenta, Carrito si es necesario más adelante */}
        </div>
        {/* Botón para menú móvil (opcional) */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* Icono de menú (ej. hamburguesa) */}
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

