import './globals.css'; // Asegúrate de que este archivo exista o créalo
import Layout from '@/components/Layout'; // Importa el Layout que creamos

export const metadata = {
  title: 'Impresión 3D Pro - Servicio Profesional',
  description: 'Servicio de impresión 3D con opción de bañado en oro, plata y cobre.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

