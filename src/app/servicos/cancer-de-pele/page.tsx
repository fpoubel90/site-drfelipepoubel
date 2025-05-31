"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Idealmente, a metadata seria definida em um Server Component pai ou layout.tsx específico para /servicos
// Se esta página precisa ser "use client" para AOS, o document.title é a forma de definir o título da aba.
// export const metadata = {
// title: "Câncer de Pele - Tipos, Prevenção e Tratamento | Dr. Felipe Poubel",
// description: "Informações sobre Carcinoma Basocelular (CBC), Carcinoma Espinocelular (CEC), Melanoma, Lesões Pré-Cancerígenas, prevenção e tratamento.",
// };

// Definição dos tipos de câncer para o map
const tiposDeCancer = [
  {
    id: "cbc",
    title: "Carcinoma Basocelular (CBC)",
    icon: "🟦",
    color: "text-blue-600 dark:text-blue-400", // Cor para o ícone e talvez título
    image: "/cbc.png",
    imageAlt: "Ilustração de um Carcinoma Basocelular",
    subtext: "Mais comum, menos agressivo.",
    description: [
      "Apresenta crescimento lento e raramente causa metástase (espalha para outros órgãos).",
      "Geralmente surge como uma lesão que se assemelha a uma pequena ferida que não cicatriza, um nódulo de aparência brilhante (perolado), avermelhado, ou com casquinhas e crostas centrais.",
    ],
  },
  {
    id: "cec",
    title: "Carcinoma Espinocelular (CEC)",
    icon: "🟥",
    color: "text-red-600 dark:text-red-400",
    image: "/cec.png",
    imageAlt: "Ilustração de um Carcinoma Espinocelular",
    subtext: "Mais agressivo que o CBC.",
    description: [
      "Pode gerar metástase se não for tratado precocemente.",
      "Caracteriza-se por uma lesão endurecida, de superfície áspera, avermelhada ou acastanhada. Tende a crescer mais rapidamente, podendo ulcerar (formar uma ferida) ou sangrar com facilidade.",
      "É mais frequente em áreas do corpo com exposição solar crônica, como face, orelhas, couro cabeludo e lábios.",
    ],
  },
  {
    id: "melanoma",
    title: "Melanoma",
    icon: "⬛",
    color: "text-slate-800 dark:text-slate-200",
    image: "/melanoma.png",
    imageAlt: "Ilustração de um Melanoma",
    subtext: "O mais grave e perigoso dos cânceres de pele.",
    description: [
      "Possui alta chance de metástase se não for diagnosticado e tratado em seus estágios iniciais.",
      "Geralmente se manifesta como uma pinta (nevo) ou mancha escura (marrom ou preta) que apresenta mudanças em sua forma, cor, tamanho, ou que começa a apresentar sintomas como coceira, dor ou sangramento.",
    ],
    extraContent: ( // Usando as constantes de estilo que você definiu
      <>
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 mt-4 mb-2">
          🩺 Regra do ABCDE para Sinais Suspeitos:
        </h3>
        <ul className="list-disc list-outside ml-5 space-y-1 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <li>
            <b>A</b>ssimetria: Uma metade da lesão é diferente da outra.
          </li>
          <li>
            <b>B</b>ordas irregulares: Contornos entalhados, chanfrados ou mal definidos.
          </li>
          <li>
            <b>C</b>ores múltiplas: Presença de várias cores (preto, marrom, tons de branco, avermelhado ou azul) na mesma lesão.
          </li>
          <li>
            <b>D</b>iâmetro: Geralmente maior que 6mm (tamanho da borracha de um lápis), embora melanomas menores possam ocorrer.
          </li>
          <li>
            <b>E</b>volução: Mudanças recentes e rápidas na aparência da lesão (cor, tamanho, forma, relevo) ou o surgimento de sintomas como coceira, sensibilidade ou sangramento.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "lesoes-precancerigenas",
    title: "Lesões Pré-Cancerígenas",
    icon: "⚠️", // Emoji para Queratose Actínica é ☀️, mas o ⚠️ é mais genérico para lesões pré-cancerígenas
    color: "text-orange-600 dark:text-orange-400",
    image: "/ceratose-actinica.png",
    imageAlt: "Ilustração de Queratose Actínica",
    subtext: "☀️ Queratose Actínica (QA) — Lesão precursora do CEC.",
    description: [
      "São lesões cutâneas ásperas ao toque (semelhantes a uma lixa), geralmente avermelhadas ou da cor da pele, que podem apresentar descamação.",
      "Surgem predominantemente em áreas do corpo com alta exposição solar crônica, como face, couro cabeludo (em indivíduos calvos), orelhas, dorso das mãos e antebraços.",
      "É fundamental o tratamento das queratoses actínicas, pois uma porcentagem delas pode evoluir para um Carcinoma Espinocelular (CEC) invasivo.",
    ],
  },
];

export default function CancerDePelePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 }); // Reduzido offset para animações dispararem um pouco antes

    const handleHashChange = () => { /* ... seu código de handleHashChange ... */ };
    if (window.location.hash) setTimeout(handleHashChange, 0);
    window.addEventListener("hashchange", handleHashChange, false);
    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  useEffect(() => {
    document.title = "Câncer de Pele - Tipos, Prevenção e Tratamento | Dr. Felipe Poubel";
  }, []);

  // Estilos reutilizáveis que você definiu
  const titleStyleH1 = "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 text-center"; // Título da página
  const introSubtitleStyle = "text-lg text-slate-700 dark:text-slate-300 mb-10 text-center max-w-2xl mx-auto";

  const sectionTitleStyleH2 = "text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2"; // Título de cada seção de câncer
  const paragraphStyle = "text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3"; // Adicionado mb-3
  const listStyle = "list-disc list-outside ml-5 space-y-1.5 text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3"; // Adicionado mb-3 e space-y-1.5

  const cardImageContainerStyle = "relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-300 dark:ring-slate-700 hover:scale-[1.03] hover:shadow-xl transition-all duration-300";

  return (
    <main className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-slate-900"> {/* Fundo um pouco diferente para a página de serviço */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className={titleStyleH1} data-aos="fade-down">
          <span className="text-4xl sm:text-5xl md:text-6xl mr-2">🎯</span> Câncer de Pele
        </h1>
        <p className={introSubtitleStyle} data-aos="fade-up" data-aos-delay="100">
          O que é, seus tipos, como identificar, prevenir e opções de tratamento.
        </p>

        {/* Introdução Geral */}
        <section className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-8 mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className={sectionTitleStyleH2}>
            <span className="text-2xl">✅</span> O que é o Câncer de Pele?
          </h2>
          <p className={paragraphStyle}>
            É o tipo de câncer mais frequente no Brasil e no mundo, causado pelo crescimento anormal e descontrolado das células que compõem a pele. A principal causa é a exposição excessiva e desprotegida à radiação ultravioleta (UV) do sol.
          </p>
        </section>

        {/* Mapeando os Tipos de Câncer */}
        {tiposDeCancer.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className="mb-12 scroll-mt-28 md:scroll-mt-24 pt-6 border-t border-slate-200 dark:border-slate-700" // Adicionado border-t e pt-6 para separar visualmente
          >
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-6 items-start"> {/* Alterado para items-start */}
              <div className="md:col-span-5" data-aos="fade-right" data-aos-delay={100 + index * 50}>
                {item.id === "melanoma" ? (
                  <div className="flex flex-col space-y-4"> {/* Container flex vertical para as imagens do melanoma */}
                    <div className={cardImageContainerStyle}>
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
                      />
                    </div>
                    <div className={cardImageContainerStyle}>
                      <Image
                        src="/abcde.png"
                        alt="Regra ABCDE do Melanoma"
                        fill
                        className="object-contain p-2" // object-contain para garantir que a imagem caiba no quadrado
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={cardImageContainerStyle}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
                    />
                  </div>
                )}
              </div>
              <div className="md:col-span-7" data-aos="fade-left" data-aos-delay={150 + index * 50}>
                <h2 className={`${sectionTitleStyleH2} ${item.color}`}>
                  <span className="text-3xl">{item.icon}</span>
                  {item.title}
                </h2>
                {item.subtext && <p className={`${paragraphStyle} italic !mt-0 mb-3`}>{item.subtext}</p>} {/* Adicionado !mt-0 */}
                {item.description.map((desc, idx) => (
                  <p key={idx} className={paragraphStyle}>
                    {desc}
                  </p>
                ))}
                {item.extraContent}
              </div>
            </div>
            {index < tiposDeCancer.length -1 && <hr className="my-10 sm:my-12" data-aos="fade-up" />} {/* Adiciona HR apenas se não for o último item */}
          </section>
        ))}

        {/* Prevenção */}
        <section id="prevencao" className="mb-12 scroll-mt-28 md:scroll-mt-24 pt-6 border-t border-slate-200 dark:border-slate-700" data-aos="fade-up">
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-6 items-center">
            <div className="md:col-span-5" data-aos="fade-right" data-aos-delay="100">
              <div className={cardImageContainerStyle}>
                <Image src="/protetor-solar.png" alt="Prevenção do Câncer de Pele com protetor solar" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
              </div>
            </div>
            <div className="md:col-span-7" data-aos="fade-left" data-aos-delay="150">
              <h2 className={`${sectionTitleStyleH2} text-green-600 dark:text-green-400`}>
                <span className="text-3xl">💡</span> Prevenção
              </h2>
              <p className={`${paragraphStyle} mb-3`}>A prevenção é a melhor estratégia contra o câncer de pele. Adote hábitos saudáveis:</p>
              <ul className={listStyle}>
                <li>Use protetor solar diariamente (FPS 30 ou mais), mesmo em dias nublados, e reaplique a cada 2 horas ou após sudorese intensa.</li>
                <li>Proteja-se com chapéus de abas largas, roupas com proteção UV e óculos de sol.</li>
                <li>Evite a exposição solar direta entre 10h e 16h, quando a radiação UV é mais intensa.</li>
                <li>Realize autoexame da pele regularmente e consulte um médico especialista para check-ups anuais ou sempre que notar alguma alteração suspeita.</li>
              </ul>
            </div>
          </div>
        </section>
        <hr className="my-10 sm:my-12" data-aos="fade-up"/>

        {/* Tratamento */}
        <section id="tratamento-geral" className="mb-16 scroll-mt-28 md:scroll-mt-24 pt-6 border-t border-slate-200 dark:border-slate-700" data-aos="fade-up">
          <div className="text-center md:text-left"> {/* Envolvendo título e conteúdo para alinhamento */}
            <h2 className={`${sectionTitleStyleH2} justify-center md:justify-start text-teal-600 dark:text-teal-400`}>
              <span className="text-3xl">🏥</span> Opções de Tratamento
            </h2>
          </div>
          <div className="mt-4" data-aos="fade-up" data-aos-delay="100">
            <p className={paragraphStyle}>
              O tratamento do câncer de pele é individualizado e depende do tipo, estágio, tamanho e localização do tumor, além das condições gerais de saúde do paciente. As principais abordagens incluem:
            </p>
            <ul className={`${listStyle} mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2`}> {/* Lista em duas colunas para melhor aproveitamento */}
              <li><strong>Cirurgia Excisional:</strong> Remoção do tumor com margens de segurança.</li>
              <li><strong>Cirurgia Micrográfica de Mohs:</strong> Alta precisão para preservar tecido sadio.</li>
              <li><strong>Curetagem e Eletrocoagulação:</strong> Para lesões superficiais.</li>
              <li><strong>Crioterapia:</strong> Congelamento com nitrogênio líquido.</li>
              <li><strong>Terapia Fotodinâmica (PDT):</strong> Luz e substâncias fotossensibilizantes.</li>
              <li><strong>Terapias Tópicas:</strong> Cremes ou géis específicos.</li>
              <li><strong>Radioterapia e Terapias Sistêmicas:</strong> Para casos avançados.</li>
            </ul>
            <p className={`${paragraphStyle} mt-6 font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-center`}>
              <span className="text-2xl mr-2">✅</span> O diagnóstico precoce é crucial para aumentar significativamente as chances de cura!
            </p>
          </div>
        </section>

        {/* Botão CTA Final */}
        <div className="mt-16 pt-10 border-t border-slate-300 dark:border-slate-700 text-center" data-aos="fade-up">
          <a
            href="/#localizacao"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-transform duration-150 ease-in-out hover:scale-105"
          >
            Agendar Avaliação da Pele
          </a>
        </div>
      </div>
    </main>
  );
}