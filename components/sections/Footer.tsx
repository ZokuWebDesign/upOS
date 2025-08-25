"use client";
import { SOCIAL_LINKS, WHATSAPP_LINKS } from "@/constants/links";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Main Footer */}
      <div className="w-full bg-gradient-to-br from-[#155eef] to-[#3685fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-[70px]">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-[42px] sm:gap-8">
            {/* Company Info */}
            <div className="w-full lg:w-[356px]">
              <div className="flex flex-col gap-4 items-center sm:items-start">
                {/* Logo */}
                <div className="w-[116px] h-[40px]">
                  <a 
                    href="#inicio"
                    className="w-full h-full"
                  >
                    <img
                      src="/assets/logo/logo-footer.svg"
                      alt="upOS Logo"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-[20px] text-white leading-[34px]">Simplificando tarefas e</p>
                  <p className="text-[20px] text-white leading-[34px]">otimizando processo!</p>
                </div>
                <button className="w-[250px] h-11 bg-white rounded-2xl">
                  <a
                    href={WHATSAPP_LINKS.SUPPORT}
                    className="w-full px-4 py-2.5 text-base font-bold text-[#3685fb]"
                  >
                    Falar com o suporte
                  </a>
                </button>
              </div>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 lg:gap-[53px]">
              {/* Mapa do site */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-[14px] leading-[20px]">Mapa do site</h3>
                <div className="flex flex-col gap-3 text-white text-[14px] leading-[24px] font-semibold">
                  <a href="#inicio">Início</a>
                  <a href="#desafios">Desafios</a>
                  <a href="#funcionalidades">Funcionalidades</a>
                  <a href="#como-funciona">Como funciona</a>
                  <a href="#teste-gratis">Teste grátis</a>
                  <a href="#depoimentos">Depoimentos</a>
                  <a href="#faq">Dúvidas Frequentes</a>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-[14px] leading-[20px]">Social</h3>
                <div className="flex flex-col gap-3 text-white text-[14px] leading-[24px] font-semibold">
                  <a href={SOCIAL_LINKS.INSTAGRAM}>Instagram</a>
                  <a href={SOCIAL_LINKS.FACEBOOK}>Facebook</a>
                  <a href={SOCIAL_LINKS.WHATSAPP}>Whatsapp</a>
                  <a href={SOCIAL_LINKS.YOUTUBE}>Youtube</a>
                  <a href={SOCIAL_LINKS.LINKEDIN}>Linkedin</a>
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-[14px] leading-[20px]">Legal</h3>
                <div className="flex flex-col gap-3 text-white text-[14px] leading-[24px] font-semibold">
                  <a href="/termos">Termos de uso</a>
                  <a href="/politica">Política de privacidade</a>
                </div>
              </div>

              {/* Atendimento */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white text-[14px] leading-[20px]">Atendimento</h3>
                <div className="flex flex-col gap-3 text-white text-[14px] leading-[24px] font-semibold">
                  <a href="tel:5564993016145">+55 (64) 99301-6145</a>
                  <a href="mailto:suporte@upos.com.br">suporte@upos.com.br</a>
                  <a href={WHATSAPP_LINKS.WORK}>Trabalhe conosco</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-[29px] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#5B5B5B] text-[16px] text-center sm:text-left">
            ® 2025 | upOS | CNPJ: 25.222.000/0001-01 | Todos os direitos reservados.
          </p>
          <div className="flex gap-3">
            <a href={SOCIAL_LINKS.INSTAGRAM} className="hover:opacity-80">
              <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.YOUTUBE} className="hover:opacity-80">
              <img src="/assets/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
            </a>
            {/*
            <a href={SOCIAL_LINKS.LINKEDIN} className="hover:opacity-80">
              <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            */}
            <a href={SOCIAL_LINKS.FACEBOOK} className="hover:opacity-80">
              <img src="/assets/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
