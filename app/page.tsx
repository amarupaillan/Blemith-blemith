"use client";

import Link from "next/link";
import { CheckCircle2, Phone, Mail, MapPin, Clock, Shield, Hammer, Construction, Menu, X } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const galleryImages = [
    "/images/IMG_8573%20copy.jpeg",
    "/images/IMG_8581%20copy.jpeg",
    "/images/IMG_8582%20copy.jpeg",
    "/images/IMG_8588%20copy.jpeg",
    "/images/IMG_8593%20copy.jpeg",
    "/images/IMG_8596%20copy.jpeg",
    "/images/IMG_8599%20copy.jpeg",
    "/images/IMG_8620%20copy.jpeg",
    "/images/IMG_8624%20copy.jpeg",
  ];

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/Logo%20copy.png" 
              alt="Blemith & Blemith Logo" 
              width={180} 
              height={50} 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#inicio" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Inicio</Link>
            <Link href="#nosotros" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Nosotros</Link>
            <Link href="#servicios" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Servicios</Link>
            <Link href="#galeria" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Galería</Link>
            <Link href="https://wa.link/xzvs9u" target="_blank" className="px-5 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
              Cotizar Ahora
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute top-20 left-0 w-full shadow-lg z-40">
            <div className="flex flex-col p-4 gap-4">
              <Link 
                href="#inicio" 
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="#nosotros" 
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="#servicios" 
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="#galeria" 
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </Link>
              <Link 
                href="https://wa.link/xzvs9u" 
                target="_blank" 
                className="px-5 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cotizar Ahora
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="inicio" className="relative bg-gray-900 text-white py-16 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/60 z-10"></div>
          <div className="absolute inset-0 z-0">
             <Image 
              src="/images/IMG_8581%20copy.jpeg"
              alt="Andamios en construcción"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Seguridad Garantizada en Altura</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Líderes en Arriendo y Venta de <span className="text-orange-500">Andamios</span> en Graneros
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Más de 40 años de experiencia ofreciendo soluciones integrales en andamios tradicionales y certificados Layher para la Región de O'Higgins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.link/xzvs9u" target="_blank" className="inline-flex justify-center items-center px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors text-lg">
                  Solicitar Cotización
                </Link>
                <Link href="#servicios" className="inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors text-lg backdrop-blur-sm">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Features */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">40+ Años</h3>
                  <p className="text-gray-600">De experiencia sirviendo a Graneros y la región.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">100% Certificados</h3>
                  <p className="text-gray-600">Andamios Layher que cumplen todas las normativas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Cobertura Regional</h3>
                  <p className="text-gray-600">Atención rápida en Graneros, Rancagua y alrededores.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-orange-100 rounded-2xl transform -rotate-3"></div>
                  <div className="relative h-[500px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/IMG_8581%20copy.jpeg"
                      alt="Equipo Blemith trabajando"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-orange-600 font-bold uppercase tracking-wider mb-2">Sobre Nosotros</h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Empresa local de confianza desde 1983</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Blemith & Blemith es una empresa familiar con más de 40 años de experiencia sirviendo a Graneros y toda la Región de O'Higgins. Nos especializamos en la fabricación, arriendo y venta de andamios para proyectos de construcción, industriales y de mantención.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ubicados estratégicamente en Graneros, hemos evolucionado constantemente para satisfacer las nuevas exigencias de seguridad y versatilidad del mercado. Desde hace 8 años, incorporamos el arriendo de andamios certificados multidireccionales Layher, la tecnología líder mundial en sistemas de andamiaje.
                </p>
                <ul className="space-y-4">
                  {[
                    "Asesoría técnica especializada",
                    "Entrega rápida y puntual",
                    "Cumplimiento de normativas vigentes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-orange-600 font-bold uppercase tracking-wider mb-2">Nuestros Servicios</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Soluciones para cada altura</h3>
              <p className="text-gray-600">Ofrecemos opciones flexibles de arriendo y venta adaptadas a la magnitud y requerimientos de tu obra.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Service Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/images/IMG_8588%20copy.jpeg"
                    alt="Andamios Tradicionales"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
                     <Construction className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Andamios Tradicionales</h4>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Sistemas convencionales ideales para trabajos de fachada, pintura y mantenciones simples. Una solución económica y fácil de montar para proyectos de baja y media complejidad.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                      Fácil montaje
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                      Económicos
                    </li>
                  </ul>
                  <Link href="https://wa.link/xzvs9u" target="_blank" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 mt-auto">
                    Cotizar Tradicionales &rarr;
                  </Link>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                   <Image 
                    src="/images/IMG_8624%20copy.jpeg"
                    alt="Andamios Layher"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-orange-900/30 flex items-center justify-center">
                    <Hammer className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Andamios Certificados Layher</h4>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Tecnología multidireccional líder mundial. Ofrecen máxima seguridad y versatilidad para estructuras complejas, industriales y grandes alturas. Cumplen con los más altos estándares.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                      Máxima seguridad
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                      Versatilidad total
                    </li>
                  </ul>
                  <Link href="https://wa.link/xzvs9u" target="_blank" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 mt-auto">
                    Cotizar Layher &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Gallery Section */}
        <section id="galeria" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-orange-600 font-bold uppercase tracking-wider mb-2">Nuestros Proyectos</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Galería de Obras</h3>
              <p className="text-gray-600">Un recorrido visual por algunos de nuestros trabajos en la región.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image 
                    src={src}
                    alt={`Proyecto Blemith ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-orange-600 font-bold uppercase tracking-wider mb-2">Testimonios</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h3>
            </div>
            
            <div className="max-w-sm mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gray-900/5">
              <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1149738215?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  title="Dec 13 2025 Video"
                ></iframe>
              </div>
              <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-orange-500 font-bold uppercase tracking-wider mb-2">Contáctanos</h2>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Solicita tu cotización hoy mismo. Nuestro equipo te asesorará para encontrar la mejor solución en andamios para tu obra.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Llámanos</h4>
                      <p className="text-gray-400">+56 9 7791 1150</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Escríbenos</h4>
                      <p className="text-gray-400">montajesfbf@yahoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Ubicación</h4>
                      <p className="text-gray-400">Santa Elena 342, Graneros</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col gap-8">
                 {/* WhatsApp Button */}
                <div className="bg-white rounded-2xl p-8 text-gray-900 text-center shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">¡Cotiza Rápido por WhatsApp!</h3>
                  <p className="text-gray-600 mb-8">
                    Haz clic en el botón de abajo para iniciar una conversación directa con nosotros y recibir una cotización al instante.
                  </p>
                  <Link 
                    href="https://wa.link/xzvs9u" 
                    target="_blank"
                    className="inline-flex items-center justify-center w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-md text-lg gap-2"
                  >
                    <Phone className="w-6 h-6" />
                    Escribe aquí en el WhatsApp para cotizar
                  </Link>
                </div>

                {/* Google Map */}
                <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.458992853965!2d-70.7289559242964!3d-34.06283737330752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663412402120015%3A0x6297387930182650!2sSta.%20Elena%20342%2C%20Graneros%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1709668147231!5m2!1ses!2scl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-500 py-8 border-t border-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Blemith & Blemith. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}