"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";

const testimonials = [
  {
    quote: "Conectou muito fácil com meu Bling,\ne agora tenho todos os custos\nsincronizados com a precificação.\n\nConectou muito fácil com meu Bling,\ne agora tenho todos os custos\nsincronizados com a precificação.\nConectou muito fácil com meu Bling,\ne agora tenho todos os custos\nsincronizados com a precificação.",
    name: "Marcos Laurentino",
    usageTime: "Usando há 15 dias"
  },
  {
    quote: "Conectou muito fácil com meu Bling,\ne agora tenho todos os custos\nsincronizados com a precificação.",
    name: "Daniela Mosquera",
    usageTime: "Usando há 63 dias"
  },
  {
    quote: "Conectou muito fácil com meu Bling,\ne agora tenho todos os custos\nsincronizados com a precificação.\n\nConectou muito fácil com meu Bling,\ne agora tenho todos os custos\nsincronizados com a precificação.",
    name: "Marcos Laurentino",
    usageTime: "Usando há 15 dias"
  },
  {
    quote: "Conectou muito fácil com meu Bling,\ne agora tenho todos os custos\nsincronizados com a precificação.",
    name: "Daniela Mosquera",
    usageTime: "Usando há 63 dias"
  },
  {
    quote: "Mesmo com 2500 SKUs ele cuida de me avisar e tem todos os custos visíveis e atualizados!",
    name: "Marcos Laurentino",
    usageTime: "Usando há 15 dias"
  }
];

const Testimonials = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <section id="testimonials" className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex flex-col items-center gap-10">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
              <h2 className="text-[32px] font-bold text-primary leading-10">
                O que estão dizendo...
              </h2>
            </div>

            {/* Testimonials Cards */}
            <div 
              ref={containerRef}
              className="w-full overflow-x-auto pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
              style={{
                scrollbarWidth: 'none',  /* Firefox */
                msOverflowStyle: 'none',  /* IE and Edge */
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div className="flex gap-4 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-[305px] bg-[#f0f0f0] rounded-2xl overflow-hidden select-none"
                  >
                    <div className="p-2.5 flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-[#393939] text-base tracking-[-0.8px] leading-[1.17] min-h-[212px] whitespace-pre-line">
                          {testimonial.quote}
                        </p>
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-[#393939] text-base tracking-[-0.8px] leading-[1.17]">
                            {testimonial.name}
                          </p>
                          <p className="text-[#39393980] text-xs tracking-[-0.6px]">
                            {testimonial.usageTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
