import Image from 'next/image';

const AboutUs = () => {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Teruah</h2> */}
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Imagen */}
          <div className="flex justify-center">
            <Image 
              src="./images/aboutUs.webp" 
              alt="Nuestro equipo" 
              className="rounded-lg shadow-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
  
          {/* Texto */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Acerca de nostroso.</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
            Para marcar la diferencia en el mundo no se necesitan grandes gestos, sino pequeños pasos de amor, valentía y fe. Una pequeña acción revolucionaria que puede cambiar la historia. La fuente de estos destellos de luz es nuestro Dios y Padre de las luces, que quiso depositar en Cristo toda su plenitud. Si estas unido a Él, estás completo, pleno y nada te falta. Así que sé generoso y da los dones que Él ha puesto en ti por Cristo y observa cómo el mundo cambia. No busques hacer el cambio desde afuera, ya que los cambios vienen desde dentro, así que siembra generosamente en tus generaciones amor, luz, fe, esperanza, valentía, amabilidad, paz, gratitud y verás crecer árboles de justicia. Nuestra intención es dar a las nuevas generaciones herramientas para sanar, disfrutar, crecer y gobernar. Únete al movimiento de la Verdad, la transformación y la expansión, y descubre las riquezas de Cristo.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  