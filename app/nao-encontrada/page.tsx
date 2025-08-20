"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const pathName = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  },);

  return (
    <section
      id="404"
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-primary mb-4">Página não encontrada!</h2>
        <p className="text-[#414651] text-lg mb-8">Volte para a página inicial para continuar navegando pelo site.</p>
        <div className="relative mb-8">
            <div className="py-0 lg:py-10 relative z-10">
              <img
                src="/assets/illustrations/hero-illustration.svg"
                alt="Ilustração de erro 404"
                className="w-full h-auto max-w-md mx-auto object-contain"
              />
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
          <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-primary bg-primary hover:bg-primary/90 h-auto">
            <a
              href="/"
              className="w-full px-6 py-3.5 text-white text-xl font-semibold"
            >
              Voltar para página inicial
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
