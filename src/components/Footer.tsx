const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10 w-full">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo o Nombre del Sitio */}
            <div className="text-lg font-bold text-white">Teruah</div>
  
            {/* Enlaces */}
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Inicio</a>
              <a href="#" className="hover:text-white">Libros</a>
              <a href="#" className="hover:text-white">Contacto</a>
            </nav>
  
            {/* Redes Sociales */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">📘</a> {/* Facebook */}
              <a href="#" className="hover:text-white">🐦</a> {/* Twitter */}
              <a href="#" className="hover:text-white">📷</a> {/* Instagram */}
            </div>
          </div>
  
          {/* Derechos de Autor */}
          <div className="text-center text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} Teruah. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  