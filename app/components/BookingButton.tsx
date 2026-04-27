'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window { calendar: any; }
}

export default function BookingButton({ onMobileClick }: { onMobileClick?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const btnStyle = "relative group overflow-hidden bg-gradient-to-b from-slate-200 to-slate-400 px-5 py-3 md:px-8 md:py-4 rounded-2xl shadow-[0_4px_15px_rgba(255,255,255,0.1)] active:scale-95 transition-all border-b-4 border-slate-500 flex items-center justify-center min-w-[140px] md:min-w-[180px]";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const timer = setTimeout(() => setIsLoaded(true), 5000);
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const handlePcClick = () => {
    const realGoogleBtn = containerRef.current?.querySelector('button') as HTMLElement;
    if (realGoogleBtn) {
      realGoogleBtn.click();
    } else {
      window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Sqzd8kc-5NvDonh_GoBcIh_zs29qeS6eN4F5VjPrbT-V61vPfvlA4Jm7Rhq91wCw6GrzzlPBs?gv=true', '_blank');
    }
  };

  return (
    <div className="inline-block relative">
      <Script 
        src="https://calendar.google.com/calendar/scheduling-button-script.js" 
        strategy="afterInteractive"
        onLoad={() => {
          if (window.calendar && containerRef.current) {
            window.calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Sqzd8kc-5NvDonh_GoBcIh_zs29qeS6eN4F5VjPrbT-V61vPfvlA4Jm7Rhq91wCw6GrzzlPBs?gv=true',
              label: 'Google',
              target: containerRef.current,
            });
            setTimeout(() => setIsLoaded(true), 1000);
          }
        }}
      />
      
      <button 
        // CAMBIO CLAVE: onClick mejorado para móviles
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            if (onMobileClick) onMobileClick(); // Llama a setShowCalendar(true) en page.tsx
            
            // Espera un poco a que React renderice la sección y hace scroll
            setTimeout(() => {
              const section = document.getElementById('agendar-calendario');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 200);
          } else {
            handlePcClick();
          }
        }}
        className={btnStyle}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none"></div>
        <span className="relative z-10 flex items-center gap-2 text-black font-black uppercase tracking-tighter text-xs md:text-sm pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            Agendar Hora
        </span>
      </button>

      <div 
        ref={containerRef} 
        className="absolute top-0 left-0 w-10 h-10 opacity-0 pointer-events-none -z-50 overflow-hidden"
      ></div>
    </div>
  );
}