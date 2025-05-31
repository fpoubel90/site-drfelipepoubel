"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-slate-900">
      
      

      {/* SEÇÃO HERO COM ANIMAÇÃO */}
      <section className="bg-white dark:bg-slate-800 py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className={`text-center md:text-left transition-all ease-out duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0 sm:opacity-100 sm:translate-y-0' : 'opacity-0 translate-y-10 sm:translate-y-0 sm:opacity-0 sm:translate-x-[-20px]'}`}>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Dr. Felipe Poubel
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl max-w-xl mx-auto md:mx-0">
                Impulsionado pela vocação para a medicina e o desejo genuíno de fazer a diferença na vida das pessoas, uno minha paixão pela cirurgia à dedicação aos cuidados com a pele. Ofereço um atendimento que combina a precisão da cirurgia geral com a atenção integral à saúde da sua pele, sempre com foco no seu bem-estar e em resultados que transformam.
              </p>
              <div className="mt-8 md:mt-10">
                <a
                  href="#localizacao" 
                  className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-transform duration-150 ease-in-out hover:scale-105"
                >
                  Agende sua Consulta
                </a>
              </div>
            </div>
            <div className={`flex justify-center mt-10 md:mt-0 md:justify-end transition-all ease-out duration-1000 delay-200 ${isHeroVisible ? 'opacity-100 translate-y-0 sm:opacity-100 sm:translate-y-0' : 'opacity-0 translate-y-10 sm:translate-y-0 sm:opacity-0 sm:translate-x-[20px]'}`}>
              <Image
                src="/VIT_7655.jpg" 
                alt="Dr. Felipe Poubel, especialista em cirurgia geral e dermatologia"
                width={480}  
                height={600} 
                className="rounded-xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                priority 
              />
            </div>
          </div>
        </div>
      </section>
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <section id="servicos" className="py-16 sm:py-20 bg-white dark:bg-slate-800 rounded-xl shadow-2xl">
          <div className="container mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Tratamentos
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="relative rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer group">
                <Image
                  src="/cirurgiageral.jpeg" 
                  alt="Cirurgia Geral"
                  width={500} 
                  height={500} 
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 rounded-lg transition-opacity duration-300">
                  <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center drop-shadow-md">
                    Cirurgia Geral
                  </p>
                </div>
                <a href="/servicos/cirurgia-geral" className="absolute inset-0 z-10" aria-label="Saiba mais sobre Cirurgia Geral"></a>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer group">
                <Image
                  src="/melanoma.png" 
                  alt="Câncer de Pele"
                  width={500} 
                  height={500}
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 rounded-lg transition-opacity duration-300">
                  <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center drop-shadow-md">
                    Câncer de Pele
                  </p>
                </div>
                <a href="/servicos/cancer-de-pele" className="absolute inset-0 z-10" aria-label="Saiba mais sobre Câncer de Pele"></a>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer group">
                <Image
                  src="/consultorio.png"
                  alt="Cirurgias Ambulatoriais"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 rounded-lg transition-opacity duration-300">
                  <p className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center drop-shadow-md">
                    Cirurgias Ambulatoriais
                  </p>
                </div>
                <a href="/servicos/cirurgias-ambulatoriais" className="absolute inset-0 z-10" aria-label="Saiba mais sobre Cirurgias Ambulatoriais"></a>
              </div>
            </div>
          </div>
        </section>
        
        <section id="sobre" className="py-16 sm:py-20 mt-12 sm:mt-16 bg-white dark:bg-slate-800 rounded-xl shadow-2xl">
          <div className="container mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="flex justify-center order-first md:order-none">
                <Image
                  src="/VIT_7643.jpg" 
                  alt="Dr. Felipe Poubel"
                  width={400}  
                  height={480} 
                  className="rounded-xl shadow-xl object-cover w-full max-w-sm mx-auto" 
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Dr. Felipe Poubel
                </h2>
                <p className="mt-1 text-md text-slate-500 dark:text-slate-400 mb-6">
                  CRM-ES 13423 <span className="mx-1">|</span> RQE 11122
                </p>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                  Formado em Medicina pela EMESCAM em 2015, concluí minha residência em Cirurgia Geral na Santa Casa de Misericórdia de Vitória em 2019. Para aprimorar meus conhecimentos na área de cuidados com a pele, realizei duas pós-graduações (na FGV, concluída em 2022 e na Afya, concluída em 2025).
                </p>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                  Minha prática médica é dedicada tanto à realização de cirurgias gerais de pequeno e médio porte, quanto ao manejo de diversas condições e lesões da pele, incluindo a execução de pequenas cirurgias cutâneas.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Minha missão é oferecer uma medicina humanizada, próxima do paciente, com escuta ativa e foco na resolutividade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE LOCALIZAÇÃO COM IFRAMES JSX CORRIGIDOS (AINDA COM SRC PLACEHOLDER) */}
        <section id="localizacao" className="py-16 sm:py-20 mt-12 sm:mt-16">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Onde me Encontrar
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Atendo em diferentes locais para sua maior conveniência. 
              </p>
            </div>
            <div className="flex overflow-x-auto space-x-6 sm:space-x-8 pb-6 scroll-snap-type-x-mandatory px-4 sm:px-6 lg:px-8">
              
              {/* Local 1: Clínica Lustig */}
              <div className="scroll-snap-align-start flex-shrink-0 w-11/12 sm:w-5/6 md:w-[400px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 text-center">
                  Clínica Lustig
                </h3>
                <div className="w-full h-[250px] sm:h-[300px] bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 mb-4 overflow-hidden">
                  <iframe 
  src="https://www.google.com/maps/embed?pb=!4v1748537970290!6m8!1m7!1sEqeh8R6gBYess0XsITBFfw!2m2!1d-19.90090508668694!2d-41.05600371762959!3f64.1701055858132!4f3.8433277802960504!5f0.7820865974627469" // <<<< Lembre-se: esta URL é um placeholder! Você PRECISA substituí-la pela URL longa e completa que você copia do Google Maps (Compartilhar -> Incorporar um mapa) para o endereço específico deste último local.
  width="100%"
  height="100%"
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
                </div>
                <address className="not-italic text-sm text-slate-700 dark:text-slate-300 space-y-1 mb-3">
                  <p>Av. Davi Schraiber, 54 - loja 01</p>
                  <p>Laranja da Terra - ES, 29615-000</p>
                </address>
                <p className="text-sm text-slate-800 dark:text-slate-200">
                  <a href="https://wa.me/5527995304076" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.222a3.978 3.978 0 00-2.415.889C9.86 3.001 9.24 4.25 9.111 5.478c0 .022-.023.022-.023.044v.022c-.022 0-.022.022 0 .022L8.868 8.31a1.045 1.045 0 00.244.045c.022 0 .045-.023.067-.023.244-.044.467-.133.69-.244.022 0 .022-.022.044-.022a.175.175 0 01.045-.022c1.333-.422 2.822-.044 3.533 1.067.71 1.112.355 2.667-.956 3.467a3.66 3.66 0 01-2.044.778c-.312 0-.623-.044-.912-.155l-.09-.023c-.022 0-.022 0-.044-.022a.05.05 0 010-.022c-.422-1.333.066-2.844 1.088-3.577.11-.067.2-.178.2-.312a.238.238 0 00-.022-.09.28.28 0 00-.09-.066c-1.11-.689-2.644-.333-3.444.978-.777 1.289-.422 2.823.844 3.578.022.022.045.022.067.044.023.022.023.045.023.067l2.756 2.71a.48.48 0 00.045.023c.288.11.577.177.888.177a3.61 3.61 0 002.044-.777c1.845-1.133 2.445-3.467 1.422-5.267-.244-.422-.533-.8-.91-1.11a1.972 1.972 0 00-2.356-.09zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10a9.96 9.96 0 007.072-2.928A9.96 9.96 0 0020 10C20 4.477 15.523 0 10 0z"></path></svg>
                    <span>WhatsApp: (27) 99530-4076</span>
                  </a>
                </p>
              </div>

              {/* Local 2: Hospital São Vicente de Paulo */}
              <div className="scroll-snap-align-start flex-shrink-0 w-11/12 sm:w-5/6 md:w-[400px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 text-center">
                  Hospital São Vicente de Paulo
                </h3>
                <div className="w-full h-[250px] sm:h-[300px] bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 mb-4 overflow-hidden">
                  <iframe 
  src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1748538029136!5m2!1spt-BR!2sbr!6m8!1m7!1stovgGtxUHo8kLxSKzwpgag!2m2!1d-20.0756090407709!2d-41.12504506358189!3f83.66116987335765!4f-6.876087799081546!5f0.7820865974627469" // <<<< ESTA É A PARTE CRUCIAL: Substitua esta URL placeholder pela URL REAL e LONGA que você copia do Google Maps (Compartilhar -> Incorporar um mapa) para o endereço específico.
  width="100%"
  height="100%"
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
                </div>
                <address className="not-italic text-sm text-slate-700 dark:text-slate-300 space-y-1 mb-3">
                  <p>R. José Giestas, Nº 63 - Centro</p>
                  <p>Afonso Cláudio - ES, 29600-000</p>
                </address>
                <p className="text-sm text-slate-800 dark:text-slate-200">
                  <a href="https://wa.me/5527988806052" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.222a3.978 3.978 0 00-2.415.889C9.86 3.001 9.24 4.25 9.111 5.478c0 .022-.023.022-.023.044v.022c-.022 0-.022.022 0 .022L8.868 8.31a1.045 1.045 0 00.244.045c.022 0 .045-.023.067-.023.244-.044.467-.133.69-.244.022 0 .022-.022.044-.022a.175.175 0 01.045-.022c1.333-.422 2.822-.044 3.533 1.067.71 1.112.355 2.667-.956 3.467a3.66 3.66 0 01-2.044.778c-.312 0-.623-.044-.912-.155l-.09-.023c-.022 0-.022 0-.044-.022a.05.05 0 010-.022c-.422-1.333.066-2.844 1.088-3.577.11-.067.2-.178.2-.312a.238.238 0 00-.022-.09.28.28 0 00-.09-.066c-1.11-.689-2.644-.333-3.444.978-.777 1.289-.422 2.823.844 3.578.022.022.045.022.067.044.023.022.023.045.023.067l2.756 2.71a.48.48 0 00.045.023c.288.11.577.177.888.177a3.61 3.61 0 002.044-.777c1.845-1.133 2.445-3.467 1.422-5.267-.244-.422-.533-.8-.91-1.11a1.972 1.972 0 00-2.356-.09zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10a9.96 9.96 0 007.072-2.928A9.96 9.96 0 0020 10C20 4.477 15.523 0 10 0z"></path></svg>
                    <span>WhatsApp: (27) 98880-6052</span>
                  </a>
                </p>
              </div>

              {/* Local 3: Edifício Renascer */}
              <div className="scroll-snap-align-start flex-shrink-0 w-11/12 sm:w-5/6 md:w-[400px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 text-center">
                  Edifício Renascer
                </h3>
                <div className="w-full h-[250px] sm:h-[300px] bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 mb-4 overflow-hidden">
                  <iframe 
  src="https://www.google.com/maps/embed?pb=!4v1748537828700!6m8!1m7!1snfE7ZQ0CfzQLVAgqu6JhMA!2m2!1d-20.03163280361308!2d-40.74153916906668!3f82.0995754191032!4f-2.308726095869133!5f2.299968626952992" // <<<< Lembre-se: esta URL é um placeholder! Você PRECISA substituí-la pela URL longa e completa que você copia do Google Maps (Compartilhar -> Incorporar um mapa) para o endereço específico deste local.
  width="100%"
  height="100%"
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
                </div>
                <address className="not-italic text-sm text-slate-700 dark:text-slate-300 space-y-1 mb-3">
                  <p>R. Herman Miertschink, 175 - Centro</p>
                  <p>Santa Maria de Jetibá - ES, 29645-000</p>
                </address>
                <p className="text-sm text-slate-800 dark:text-slate-200">
                  <a href="https://wa.me/5527999505907" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.222a3.978 3.978 0 00-2.415.889C9.86 3.001 9.24 4.25 9.111 5.478c0 .022-.023.022-.023.044v.022c-.022 0-.022.022 0 .022L8.868 8.31a1.045 1.045 0 00.244.045c.022 0 .045-.023.067-.023.244-.044.467-.133.69-.244.022 0 .022-.022.044-.022a.175.175 0 01.045-.022c1.333-.422 2.822-.044 3.533 1.067.71 1.112.355 2.667-.956 3.467a3.66 3.66 0 01-2.044.778c-.312 0-.623-.044-.912-.155l-.09-.023c-.022 0-.022 0-.044-.022a.05.05 0 010-.022c-.422-1.333.066-2.844 1.088-3.577.11-.067.2-.178.2-.312a.238.238 0 00-.022-.09.28.28 0 00-.09-.066c-1.11-.689-2.644-.333-3.444.978-.777 1.289-.422 2.823.844 3.578.022.022.045.022.067.044.023.022.023.045.023.067l2.756 2.71a.48.48 0 00.045.023c.288.11.577.177.888.177a3.61 3.61 0 002.044-.777c1.845-1.133 2.445-3.467 1.422-5.267-.244-.422-.533-.8-.91-1.11a1.972 1.972 0 00-2.356-.09zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10a9.96 9.96 0 007.072-2.928A9.96 9.96 0 0020 10C20 4.477 15.523 0 10 0z"></path></svg>
                    <span>WhatsApp: (27) 99950-5907</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        </main>

       
    </div>
  );
}