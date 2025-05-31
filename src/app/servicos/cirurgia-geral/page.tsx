"use client"; 

import type { Metadata } from 'next'; 
import Image from "next/image"; 
import { useEffect } from 'react'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

// export const metadata: Metadata = { // Metadata estática é melhor em Server Components ou layout.tsx.
// title: 'Cirurgia Geral Detalhada | Dr. Felipe Poubel',
// description: 'Saiba mais sobre os procedimentos de Cirurgia Geral oferecidos pelo Dr. Felipe Poubel, incluindo colelitíase (pedra na vesícula), hérnias abdominais e outras condições.',
// };

export default function CirurgiaGeralPage() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
      offset: 100,   
    });
    // Para garantir que o scroll para âncoras funcione bem com cabeçalho fixo, se necessário:
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          const headerOffset = 80; // Ajuste este valor conforme a altura do seu cabeçalho
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };
    // Adiciona o listener se houver hash na URL ao carregar
    if (window.location.hash) {
        // Pequeno timeout para garantir que o DOM esteja pronto
        setTimeout(handleHashChange, 0);
    }
    // Adiciona listener para futuras mudanças de hash (se links internos na página mudarem o hash)
    window.addEventListener('hashchange', handleHashChange, false);
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  // Se precisar definir o título da página dinamicamente em um client component:
  useEffect(() => {
    document.title = 'Cirurgia Geral Detalhada | Dr. Felipe Poubel';
  }, []);


  return (
    <main className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10 text-center" data-aos="fade-down">
          Cirurgia Geral
        </h1>

        <article className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none">
          
          <p className="lead text-lg !text-slate-700 dark:!text-slate-300 leading-relaxed" data-aos="fade-up"> {/* Adicionei !text- para priorizar sobre o prose se necessário */}
            A Cirurgia Geral é a especialidade médica que se dedica ao diagnóstico e tratamento cirúrgico de diversas doenças.
          </p>
          <hr className="my-8 sm:my-10" data-aos="fade-up" />

          {/* TEMA 1: PEDRA NA VESÍCULA (COLELITÍASE) */}
          <section id="pedra-na-vesicula" className="mb-16 scroll-mt-28 md:scroll-mt-24">
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2 mb-8" data-aos="fade-up"> {/* Aumentei o mb do h2 */}
              Pedra na Vesícula (Colelitíase) — O que é e como tratar?
            </h2>
          
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-8 items-start"> {/* Aumentei o gap-y */}
              <div className="md:col-span-5" data-aos="fade-right" data-aos-delay="100">
                <div className="relative w-full h-64 sm:h-72 md:h-60 lg:h-80 xl:h-96 rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 hover:scale-105 transition-transform duration-300"> {/* Alturas ajustadas e transição adicionada */}
                  <Image
                    src="/colelitiase.png"
                    alt="Ilustração médica de pedra na vesícula mostrando anatomia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
                  />
                </div>
              </div>
          
              <div className="md:col-span-7 space-y-6" data-aos="fade-left" data-aos-delay="200">
                {/* Subtópico: O que é? */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 mb-2">
                    {/* Se Check for um componente: <Check className="text-emerald-500 w-5 h-5" /> */}
                    <span className="text-emerald-500 text-2xl">✅</span> O que é pedra na vesícula?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    A vesícula biliar armazena a bile, líquido essencial para a digestão de gorduras. Quando a bile fica muito concentrada ou desequilibrada, podem se formar pequenas pedras (cálculos) dentro dela.
                  </p>
                </div>
          
                {/* Subtópico: Sintomas */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 mb-2">
                    {/* Se Search for um componente: <Search className="text-blue-500 w-5 h-5" /> */}
                    <span className="text-blue-500 text-2xl">🔍</span> Sintomas
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">●</span><span>Muitas pessoas são assintomáticas.</span></li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">●</span><span>Dor forte no lado direito da barriga (cólica biliar), pior após ingestão de gordura.</span></li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">●</span><span>Náusea, vômito e desconforto abdominal.</span></li>
                    <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">●</span><span>Casos graves: inflamação (colecistite) ou outras complicações.</span></li>
                  </ul>
                </div>
          
                {/* Subtópico: Riscos (Bloco Destacado) */}
                <div className="bg-yellow-50 dark:bg-yellow-800/30 border border-yellow-300 dark:border-yellow-700/50 rounded-xl p-4 shadow">
                  <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 flex items-center gap-2 mb-2">
                    {/* Se AlertTriangle for um componente: <AlertTriangle className="text-yellow-600 w-5 h-5" /> */}
                    <span className="text-yellow-600 text-2xl">⚠️</span> Tem risco?
                  </h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 leading-relaxed mb-1">Se não tratar, as pedras podem causar complicações sérias como:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800 dark:text-yellow-200 leading-relaxed">
                    <li>Inflamação da vesícula (colecistite).</li>
                    <li>Icterícia (pele e olhos amarelados).</li>
                    <li>Pancreatite (inflamação do pâncreas).</li>
                  </ul>
                </div>
          
                {/* Subtópico: Tratamento */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 mb-2">
                    {/* Se Lightbulb for um componente: <Lightbulb className="text-sky-500 w-5 h-5" /> */}
                    <span className="text-sky-500 text-2xl">💡</span> Tratamento
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    O tratamento definitivo para pedras na vesícula sintomáticas é a cirurgia para remoção da vesícula (colecistectomia). Geralmente, é feita por videolaparoscopia (técnica minimamente invasiva), que é segura e permite uma recuperação rápida, possibilitando uma vida normal sem a vesícula.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-10 sm:my-12" data-aos="fade-up" /> 
          {/* FIM DO TEMA 1 */}

                    {/* ===================================================================== */}
          {/* TEMA 2: HÉRNIAS ABDOMINAIS - CORES DE TÍTULO AJUSTADAS             */}
          {/* ===================================================================== */}
          <div id="hernia" className="mb-16 scroll-mt-28 md:scroll-mt-24">
            {/* Título H2 agora usa text-slate-800/text-slate-100 como o da Pedra na Vesícula */}
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2 mb-8" data-aos="fade-up">
              Hérnias Abdominais — O que são e como tratar?
            </h2>
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-8 items-start">
              <div className="md:col-span-5" data-aos="fade-right" data-aos-delay="100">
                <div className="relative w-full h-64 sm:h-72 md:h-60 lg:h-80 xl:h-96 rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/hernia.png" 
                    alt="Ilustração de Hérnia Abdominal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6" data-aos="fade-left" data-aos-delay="200">

                {/* Subtópicos H3 agora usam text-slate-700/text-slate-200 */}
                <div className="p-4 bg-white dark:bg-slate-700/50 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 mb-2">
                    <span className="text-emerald-500 text-2xl">✅</span> O que é hérnia?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Hérnia é um abaulamento (caroço) que surge no corpo, comummente na barriga ou virilha. Ocorre quando parte de um órgão interno (como gordura ou intestino) se projeta através de uma área enfraquecida nos músculos. Esse abaulamento pode aumentar com esforço, tosse ou ao ficar de pé.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-700/50 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 mb-2">
                    <span className="text-blue-500 text-2xl">🔍</span> Sintomas Comuns
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <li>Presença de um abaulamento ou "caroço" visível, que pode desaparecer ao deitar.</li>
                    <li>Desconforto ou dor na região, especialmente ao realizar esforço físico, levantar peso ou tossir.</li>
                    <li>Em casos graves (hérnia encarcerada ou estrangulada), pode ocorrer dor intensa e contínua, náuseas, vômitos e alterações no trânsito intestinal, configurando uma urgência médica.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-800/30 border border-yellow-300 dark:border-yellow-700/50 rounded-xl p-4 shadow">
                  <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300 flex items-center gap-2 mb-2">
                    <span className="text-yellow-600 text-2xl">⚠️</span> Tem risco?
                  </h3>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 leading-relaxed">
                    Embora nem toda hérnia seja uma emergência, ela não se cura sozinha. O principal risco é o estrangulamento, onde o conteúdo da hérnia fica preso e tem seu suprimento sanguíneo cortado. Esta é uma complicação grave que exige cirurgia de emergência para evitar danos aos órgãos.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-700/50 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 mb-2">
                    <span className="text-sky-500 text-2xl">💡</span> Tratamento
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                    O único tratamento definitivo para hérnias é a correção cirúrgica. O objetivo é reposicionar o tecido ou órgão para dentro da cavidade abdominal e reforçar a área enfraquecida da parede muscular, geralmente com o uso de uma tela sintética.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-1">As técnicas cirúrgicas incluem:</p>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <li><strong>Cirurgia Convencional (aberta):</strong> Realizada através de um corte na região da hérnia.</li>
                    <li><strong>Videolaparoscopia:</strong> Técnica minimamente invasiva, realizada com pequenas incisões e o auxílio de uma câmera.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10 sm:my-12" data-aos="fade-up" /> 
          {/* FIM DO TEMA 2 */}

          {/* ===================================================================== */}
          {/* TEMA 3: OUTROS PROCEDIMENTOS - CORES DE TÍTULO AJUSTADAS         */}
          {/* ===================================================================== */}
          <div id="outras-doencas" className="mb-16 scroll-mt-28 md:scroll-mt-24">
            {/* Título H2 agora usa text-slate-800/text-slate-100 */}
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2 mb-8" data-aos="fade-up">
              <span className="mr-2">🩺</span>Outros Procedimentos Cirúrgicos Comuns
            </h2>
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-8 items-start">
              <div className="md:col-span-5" data-aos="fade-right" data-aos-delay="100">
                <div className="relative w-full h-64 sm:h-72 md:h-60 lg:h-80 xl:h-96 rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/outras.png" 
                    alt="Outros Procedimentos Cirúrgicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6" data-aos="fade-left" data-aos-delay="200">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Além das cirurgias de hérnia e pedra na vesícula, também realizo procedimentos cirúrgicos comuns na prática médica, que visam melhorar a qualidade de vida dos pacientes, muitas vezes de forma simples, rápida e com recuperação tranquila.
                </p>

                {/* Subtópicos H3 agora usam text-slate-700/text-slate-200 */}
                <div className="p-4 bg-white dark:bg-slate-700/50 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Fimose (Postectomia/Circuncisão)
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Procedimento realizado para tratar a dificuldade de exposição da glande, melhorando a higiene, prevenindo infecções e, muitas vezes, contribuindo para o conforto e bem-estar na vida adulta.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-700/50 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Cisto Pilonidal
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Remoção de cisto ou abscesso que aparece na região do cóccix (região sacral), geralmente causado pelo encravamento de pelos. Pode gerar dor, inflamação e secreção. O tratamento é cirúrgico, removendo o cisto e permitindo a cicatrização adequada.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-700/50 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Hidrocele
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    É o acúmulo de líquido ao redor do testículo, formando um aumento de volume na bolsa escrotal. O tratamento é feito por meio de cirurgia simples, geralmente com alta no mesmo dia, devolvendo conforto e qualidade de vida.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-slate-700/50 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Vasectomia
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Método seguro e definitivo de contracepção masculina. Procedimento rápido, realizado de forma ambulatorial, que interrompe a passagem dos espermatozoides, sem afetar a função sexual, potência ou produção hormonal.
                  </p>
                </div>

                <p className="mt-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  👉 Todas essas cirurgias podem ser feitas com técnicas modernas, minimamente invasivas sempre que possível, com foco em segurança, menor dor no pós-operatório e retorno rápido às atividades.
                </p>
              </div>
            </div>
          </div>
          {/* FIM DO TEMA 3 */}
          
        </article>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center" data-aos="fade-up">
          <a
            href="/#localizacao" 
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-transform duration-150 ease-in-out hover:scale-105"
          >
            Agendar Consulta ou Saber Mais
          </a>
        </div>

      </div>
    </main>
  );
}