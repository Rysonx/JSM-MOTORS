'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import BookingButton from './components/BookingButton';

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;

    if (Math.abs(currentY - lastY) < 10) return;

    if (currentY > lastY && currentY > 100) {
      setShowNavbar(false); // baja → se oculta
    } else {
      setShowNavbar(true); // sube → aparece
    }

    lastY = currentY;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    // CAMBIO: Fondo principal a Slate-950 (Negro azulado muy oscuro)
    <main className="min-h-screen bg-[#0a0a0a] text-slate-100">
      
     {/* Navbar: Diseño tipo Cápsula Industrial */}
      <nav
  className={`
    fixed top-6 inset-x-0 z-[100] px-4 md:px-8
    transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
    ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-[120%] opacity-0'}
  `}
>
        <div className="
          max-w-7xl mx-auto 
          backdrop-blur-md
          h-20 md:h-24 
          /* DEGRADADO: De gris oscuro metálico a negro profundo */
          bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-[#050505]
          /* BORDE: Redondeado tipo cápsula y borde sutil con brillo superior */
          rounded-full border border-white/10
          /* SOMBRAS: Elevación y suavizado de bordes */
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)]
          flex items-center justify-between 
          pr-4 md:pr-8 pl-4 md:pl-6 
          overflow-hidden
          backdrop-blur-sm
        ">
          
          {/* Contenedor del Logo: Ajustado para que no se corte */}
          <div className="flex items-center shrink-0 group">
            <div className="relative w-[140px] h-[100px] md:w-[320px] md:h-[150px] flex items-center justify-center">
              <Image 
                src="/img/logoPNG.png" 
                alt="Logo JSMmotors" 
                fill
                className="
                  object-contain object-left 
                  scale-100 group-hover:scale-105 
                  transition-transform duration-500 
                  brightness-110 contrast-110
                  /* Esto ayuda a limpiar bordes si el PNG tiene residuos negros */
                  mix-blend-lighten
                " 
                priority
              />
            </div>
          </div>

          {/* Sección Derecha: Navegación + Botón */}
          <div className="flex items-center gap-4 md:gap-8">
          {/* Links de navegación */}
          <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Taller</a>
          </div>
            
            {/* Botón Reservar: Asegúrate de que el componente BookingButton 
                tenga el degradado blanco/gris que vimos en la imagen anterior */}
            <div className="scale-80 md:scale-100">
              <BookingButton onMobileClick={() => setShowCalendar(true)} />
            </div>
            
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/JSMlogo.png" 
            alt="Fondo JSMmotors"
            fill
            className="object-cover opacity-30 md:opacity-40" // Opacidad baja para que el texto sea legible
            priority 
          />
          {/* Overlay de degradado: Oscurece arriba para el Navbar y abajo para fundir con la siguiente sección */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
          {/* Capa extra de oscuridad radial para centrar la atención en el texto */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#0a0a0a_100%)] opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center pt-[130px] md:pt-[200px] px-4 pb-12 md:px-6 md:pb-24 max-w-7xl mx-auto">
          {/* Etiqueta superior */}
          <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 block">
              Servicios Automotrices de Alto Rendimiento
            </span>
          </div>
          
          <h1 className="
            text-[1.8rem] sm:text-[2rem] md:text-5xl lg:text-7xl
            font-[900]
            leading-[1.05] md:leading-[0.8]
            tracking-tight
            text-center
            uppercase
            italic
            mb-8 md:mb-10
          ">

            {/* MOBILE 👇 */}
            <span 
              className="
                block md:hidden
                text-[2rem] sm:text-[1.6rem]
                leading-[1.1]
                text-transparent
                bg-clip-text
                animate-gradient-x
              "
              style={{ 
                backgroundImage: 'linear-gradient(to right, #e2e8f0, #94a3b8, #e2e8f0)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ESPECIALISTAS EN MECÁNICA
            </span>

            {/* DESKTOP 👇 */}
            <span className="hidden md:block">
              <span className="block drop-shadow-[0_5px_15px_rgba(255,255,255,0.1)] mb-1">
                ESPECIALISTAS EN MECÁNICA
              </span>

              <span 
                className="
                  relative inline-block
                  text-transparent
                  bg-clip-text
                  animate-gradient-x
                  pb-4
                "
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #e2e8f0, #94a3b8, #e2e8f0)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                INTEGRAL Y MANTENCIÓN

                <span className="
                  absolute bottom-2 left-0 w-full h-[6px]
                  bg-gradient-to-r from-red-600 via-red-400 to-transparent
                  rounded-full opacity-90
                "></span>
              </span>
            </span>

          </h1>

          <p className="
            text-sm sm:text-base md:text-xl
            text-slate-400
            max-w-[350px] sm:max-w-md md:max-w-2xl
            mb-10 md:mb-12
            px-4 md:px-2
            leading-snug
            text-center
          ">
            En <span className="font-bold text-slate-200">JSMmotors</span>, cuidamos tu motor con precisión técnica y estándares de calidad profesional.
          </p>

          {/* Botones */}
          <div className="flex flex-col gap-6 w-full px-6 mb-20 md:hidden">
            <a href="#servicios" className="bg-white text-black hover:bg-slate-200 transition-all px-10 py-4 rounded-2xl font-black uppercase tracking-tighter text-lg shadow-xl w-full sm:w-auto active:scale-95">
              Nuestros Servicios
            </a>
            <a href="#contacto" className="bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 px-10 py-4 rounded-2xl font-black uppercase tracking-tighter text-lg text-center w-full sm:w-auto transition-all active:scale-95">
              Ubicación Taller
            </a>
          </div>
      </div>
      </section>
        <div className="mt-12 max-w-4xl mx-auto px-6">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden">
            
            {/* Efecto de luz ambiental sutil */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-slate-500/10 blur-[100px] rounded-full"></div>
            
            <p className="relative z-10 text-lg md:text-2xl text-slate-300 leading-relaxed font-medium italic">
              "Porque en <span className="text-white font-black not-italic tracking-tighter">JSM motors</span> tu auto y tu tiempo es importante, y nosotros combinamos lo mejor para tu vehículo con la comodidad y seguridad que mereces."
            </p>
            
            <div className="relative z-10 mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Servicio a Domicilio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Taller Profesional</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Garantía Real</span>
              </div>
            </div>
          </div>
        </div>
      

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
             
              { 
                title: "Diagnóstico Scanner", 
                desc: "Tecnología avanzada para leer el lenguaje de tu auto. Detectamos fallas electrónicas antes de que sean un problema.", 
                icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" 
              },
              { 
                title: "Mantención Preventiva", 
                desc: "Asegura la longevidad de tu inversión. Revisiones exhaustivas para que nunca te quedes detenido.", 
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" 
              },
              { 
                title: "Cambio de Aceite", 
                desc: "Lubricación premium para reducir el desgaste. Utilizamos filtros y aceites de alta especificación.", 
                icon: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" 
              },
              { 
                title: "Frenos", 
                desc: "Tu seguridad no es negociable. Rectificación, cambio de pastillas y optimización del sistema de frenado.", 
                icon: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-15v6l4 2" 
              },
              { 
                title: "Distribución", 
                desc: "Sincronización perfecta para tu motor. Reemplazo de kits de distribución para prevenir averías críticas.", 
                icon: "M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM12 9v6m3-3H9" 
              },
              { 
                title: "Embrague", 
                desc: "Recupera la suavidad y potencia en cada cambio. Diagnóstico y sustitución de kits de embrague profesionales.", 
                icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" 
              }

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
                Ubicados en Temuco, estamos listos para recibir tu vehículo.
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
                    <p className="text-slate-400">Dirección de JSMmotors, Temuco</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/Sv3aBBoZrmsQoLoR6" 
                target="_blank"
                className="inline-block mt-10 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
              >
                Abrir en Google Maps
              </a>
            </div>

            {/* Mapa con filtro Dark */}
            <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-800 grayscale-0 lg:grayscale-[0.8] lg:hover:grayscale-0 transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.926501544527!2d-72.58354419999999!3d-38.7424488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3d8e4438fc9%3A0x550e634c5c7dab3b!2sAndr%C3%A9s%20Bello%201372%2C%204791322%20Temuco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1777495330784!5m2!1ses-419!2scl" // Mantén tu URL real aquí
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
        href="https://wa.me/56938653707?text=Hola%20JSMmotors,%20me%20gustaría%20agendar%20una%20revisión%20mecánica."
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