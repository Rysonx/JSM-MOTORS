'use client';
import { useState } from 'react';
import Image from 'next/image';
import BookingButton from './components/BookingButton';

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    // CAMBIO: Fondo principal a Slate-950 (Negro azulado muy oscuro)
    <main className="min-h-screen bg-[#0a0a0a] text-slate-100">
      
      {/* Navbar: Fondo oscuro con borde sutil para separar */}
      <nav className="fixed top-4 inset-x-0 z-[100] px-4 md:px-8">
        <div className="max-w-7xl mx-auto h-24 md:h-28 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-[2rem] flex items-center justify-between pr-6 md:pr-10 pl-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Contenedor del Logo: Pegado a la izquierda */}
          <div className="flex items-center shrink-0 group">
            <div className="relative w-[130px] md:w-[220px] h-[55px] md:h-[95px] overflow-hidden rounded-l-[1.8rem] rounded-r-[1.8rem] border-r border-white/10 shadow-inner">
              {/* Capa de brillo metálico dinámico */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-60"></div>
              
              <Image 
                src="/img/JSMlogo.png" 
                alt="Logo JSMmotors" 
                fill
                className="object-cover object-center scale-[1.1] group-hover:scale-115 transition-transform duration-1000 brightness-110" 
                priority
              />

              {/* Degradado radial agresivo para fundir las orillas */}
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,_transparent_30%,_#000000_130%)]"></div>
            </div>
          </div>

          {/* Sección Derecha: Navegación + Botón Estilo Metálico */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Links ocultos en móvil para no saturar */}
            <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-white transition-colors">Taller</a>
            </div>
            
            {/* Botón Reservar con diseño Industrial/Metálico */}
            <BookingButton onMobileClick={() => setShowCalendar(true)} />
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-[130px] md:pt-[200px] px-4 pb-12 md:px-6 md:pb-24">
        
        {/* Etiqueta superior */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 block">
            Servicios Automotrices de Alto Rendimiento
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] max-w-5xl text-white">
          Especialistas en mecánica <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100">
            integral y mantenimiento
          </span>
        </h1>

        <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-12 px-2 leading-relaxed">
          En <span className="font-bold text-slate-200">JSMmotors</span>, cuidamos tu motor con precisión técnica y estándares de calidad profesional.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0 mb-20">
          <button className="bg-white text-black hover:bg-slate-200 transition-all px-10 py-4 rounded-2xl font-black uppercase tracking-tighter text-lg shadow-xl w-full sm:w-auto active:scale-95">
            Nuestros Servicios
          </button>
          <a href="#contacto" className="bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 px-10 py-4 rounded-2xl font-black uppercase tracking-tighter text-lg text-center w-full sm:w-auto transition-all active:scale-95">
            Ubicación Taller
          </a>
        </div>

        {/* Imagen con degradado a Negro */}
        <div className="mt-16 w-full max-w-5xl aspect-video bg-[#1a1a1a] rounded-3xl flex items-center justify-center overflow-hidden relative border border-slate-800">
          <Image 
            src="/img/JSMlogo.png" // CAMBIAR: Imagen de motores/taller
            alt="Taller JSMmotors"
            width={1024}
            height={576}
            className="object-cover w-full h-full rounded-3xl opacity-70"
            priority 
          />
          {/* El degradado ahora desvanece hacia el negro del fondo (#0a0a0a) */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
      </section>

      {/* Sección de Servicios: Fondo Gris Oscuro */}
      <section id="servicios" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Servicios Profesionales</h2>
            <p className="text-slate-500 mt-4 italic">Potencia y fiabilidad para tu vehículo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card de Servicio Estilo Dark */}
            {[
              { title: "Mecánica General", desc: "Reparación y mantenimiento preventivo para todo tipo de motores.", icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Diagnóstico Scanner", desc: "Detección precisa de fallas electrónicas con equipos de última generación.", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
              { title: "Mantención Preventiva", desc: "Cambios de aceite, filtros y revisión de puntos de seguridad.", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((serv, index) => (
              <div key={index} className="bg-[#161616] p-8 rounded-2xl border border-slate-800 hover:border-slate-500 transition-all group">
                <div className="w-12 h-12 bg-slate-800 text-slate-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-100 group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={serv.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{serv.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Ubicación */}
      <section id="contacto" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Visítanos en el Taller</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Ubicados en **Angol**, estamos listos para recibir tu vehículo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dirección</h4>
                    <p className="text-slate-400">Dirección de JSMmotors, Angol</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/cscJ1U3AwFp9xd6g6" 
                target="_blank"
                className="inline-block mt-10 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
              >
                Abrir en Google Maps
              </a>
            </div>

            {/* Mapa con filtro Dark */}
            <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-800 grayscale-0 lg:grayscale-[0.8] lg:hover:grayscale-0 transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8435846888165!2d-72.69816068868431!3d-37.79370527186369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966bb345cf0b4667%3A0xf70b9b8249643df!2sLos%20Confines%20601%2C%20Angol%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1776404119924!5m2!1ses-419!2scl" // Mantén tu URL real aquí
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp: Mantenemos el color verde oficial pero suavizado */}
      <a
        href="https://wa.me/56940981313?text=Hola%20JSMmotors,%20me%20gustaría%20agendar%20una%20revisión%20mecánica."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all z-[100] flex items-center justify-center group"
        title="Agendar por WhatsApp"
      >
        {/* Efecto de pulso sutil detrás del botón */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor" 
          className="relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Calendario Móvil Dark */}
      {showCalendar && (
        <section className="py-10 bg-[#121212] md:hidden border-t-2 border-slate-700 fixed inset-x-0 bottom-0 z-[110] max-h-[80vh] overflow-y-auto">
          <div className="px-4 pb-20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Agenda tu revisión</h2>
              <button 
                onClick={() => setShowCalendar(false)}
                className="bg-slate-800 text-slate-300 px-4 py-1 rounded-full font-bold text-sm"
              >
                Cerrar ×
              </button>
            </div>
            <div className="w-full h-[600px] border border-slate-800 rounded-2xl overflow-hidden bg-white invert-[0.9] hue-rotate-180">
              {/* Nota: El truco de invert/hue-rotate en el iframe puede ayudar a que el calendario blanco se vea dark, pero lo ideal es configurar el tema en Google Calendar si es posible */}
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Sqzd8kc-5NvDonh_GoBcIh_zs29qeS6eN4F5VjPrbT-V61vPfvlA4Jm7Rhq91wCw6GrzzlPBs?gv=true" 
                className="w-full h-full"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}