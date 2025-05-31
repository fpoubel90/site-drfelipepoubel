// "use client"; // Removido temporariamente para teste de renderização estática

// import { useEffect } from 'react'; // Removido temporariamente
import Image from "next/image"; 
import { Card, CardContent } from "@/components/ui/card"; // Certifique-se que este caminho está correto
import { 
  CheckCircle, 
  Scissors, 
  Ear, 
  Fingerprint, 
  Zap, 
  Hand 
} from "lucide-react"; // Certifique-se que 'lucide-react' está instalado
// import AOS from 'aos'; // Removido temporariamente
// import 'aos/dist/aos.css'; // Removido temporariamente

// Metadata estática pode ser usada se a página não for "use client"
export const metadata = {
  title: "Cirurgias Ambulatoriais | Dr. Felipe Poubel",
  description: "Conheça os procedimentos dermatológicos e pequenas cirurgias realizadas em consultório pelo Dr. Felipe Poubel.",
};

export default function CirurgiasAmbulatoriaisPage() {
  // useEffect(() => { // Bloco AOS comentado temporariamente
  //   AOS.init({
  //     duration: 700, 
  //     once: true,    
  //     offset: 50,   
  //     debounceDelay: 50, 
  //     throttleDelay: 99, 
  //   });
  //   document.title = "Cirurgias Ambulatoriais | Dr. Felipe Poubel";
  // }, []);

  const iconBaseClass = "h-8 w-8"; 
  const iconColor = "text-rose-600 dark:text-rose-400";
  const iconBgColor = "bg-rose-100 dark:bg-rose-900/30";

  const procedimentos = [
    {
      id: "remocao-pintas",
      titulo: "Remoção de Pintas (Nevos)",
      descricao: "Exérese cirúrgica de nevos (pintas) com possibilidade de análise anatomopatológica (biópsia), garantindo segurança estética e diagnóstica.",
      icone: <Fingerprint className={`${iconBaseClass} ${iconColor}`} />,
      imageSrc: "/dermatoscopio-teste.png",
      imageAlt: "Dermatoscópio para exame de pintas e nevos",
    },
    {
      id: "cistos-lipomas",
      titulo: "Cistos, Lipomas e Lesões Benignas",
      descricao: "Remoção cirúrgica de cistos (sebáceos, epidérmicos), lipomas (nódulos de gordura), verrugas, siringomas, milios, fibromas e queratoses seborreicas.",
      icone: <Scissors className={`${iconBaseClass} ${iconColor}`} />,
      imageSrc: "/lesao-benigna.png", // Corrigido o nome conforme seu envio anterior: lesao-benigNa.jpg -> lesao-benigna.png
      imageAlt: "Ilustração de lesão benigna de pele",
    },
    {
      id: "biopsias-pele",
      titulo: "Biópsias de Pele",
      descricao: "Coleta de pequenos fragmentos de pele ou mucosas para análise laboratorial. Procedimento rápido que permite o diagnóstico preciso de diversas dermatoses, lesões suspeitas e neoplasias.",
      icone: <Hand className={`${iconBaseClass} ${iconColor}`} />,
      imageSrc: "/punch.png",
      imageAlt: "Instrumento de biópsia de pele tipo punch",
    },
    {
      id: "eletro-crio",
      titulo: "Eletrocauterização e Crioterapia",
      descricao: "Tratamentos para lesões cutâneas benignas como verrugas virais, queratoses seborreicas e actínicas superficiais, utilizando eletrocautério (calor) ou nitrogênio líquido (congelamento).",
      icone: <Zap className={`${iconBaseClass} ${iconColor}`} />,
      imageSrc: "/crio.png", 
      imageAlt: "Equipamento de crioterapia ou eletrocautério",
    },
    {
      id: "unha-encravada",
      titulo: "Cirurgia de Unha Encravada (Onicocriptose)",
      descricao: "Tratamento cirúrgico definitivo para unha encravada (cantoplastia), frequentemente associado à matricectomia química ou cirúrgica para evitar recidivas.",
      icone: <Scissors className={`${iconBaseClass} ${iconColor}`} />,
      imageSrc: "/unha-encravada.png",
      imageAlt: "Ilustração de unha encravada",
    },
    {
      id: "lobuloplastia",
      titulo: "Lobuloplastia (Correção de Lóbulo da Orelha)",
      descricao: "Cirurgia reparadora para correção de lóbulos de orelha rasgados (fissurados), alargados por uso de alargadores, ou flácidos devido ao envelhecimento. Procedimento rápido e seguro com resultados estéticos satisfatórios.",
      icone: <Ear className={`${iconBaseClass} ${iconColor}`} />,
      imageSrc: "/alargador.png", // Corrigido o nome conforme seu envio anterior: alargador.jpg -> alargador.png
      imageAlt: "Lóbulo da orelha",
    },
  ];

  // Estilos reutilizáveis
  const titleStyleH1 = "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center";
  const introParagraphStyle = "text-lg text-gray-700 dark:text-gray-300 mb-10 md:mb-16 text-center max-w-3xl mx-auto leading-relaxed";
  
  const cardTitleStyle = "text-lg font-semibold text-rose-800 dark:text-rose-300"; 
  const cardDescriptionStyle = "text-sm text-gray-600 dark:text-gray-400 flex-grow leading-relaxed";
  
  return (
    // A tag <main> principal é fornecida pelo layout.tsx, então esta página começa com seu conteúdo direto
    // Envolvi o conteúdo em um <div className="py-12 ..."> para manter o espaçamento da página
    <div className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div> {/* Removido data-aos="fade-down" temporariamente */}
          <h1 className={titleStyleH1}>
            <span className="text-4xl sm:text-5xl md:text-6xl mr-2">🩹</span> Cirurgias Ambulatoriais
          </h1>
          <p className={introParagraphStyle}>
            Procedimentos dermatológicos e pequenas cirurgias realizados em consultório, com segurança, conforto e rápida recuperação, visando o seu bem-estar e saúde da pele.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Removido data-aos temporariamente */}
          {procedimentos.map((item, index) => (
            <Card 
              key={item.id} 
              className="flex flex-col bg-white dark:bg-slate-800 hover:shadow-2xl focus-within:ring-2 focus-within:ring-rose-500 focus-within:ring-offset-2 transition-all duration-300 rounded-xl overflow-hidden group" // Adicionado rounded-xl
              // Removido data-aos individual do card temporariamente
            >
              {/* Imagem no topo do Card */}
              {item.imageSrc && (
                <div className="relative w-full aspect-video"> {/* Proporção 16:9 para a imagem. */}
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || item.titulo}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <CardContent className="flex flex-col items-start gap-3 p-5 flex-grow">
                <div className="flex items-center gap-3 w-full mb-2">
                  <div className={`${iconBgColor} rounded-full p-2 self-start transition-transform duration-300 group-hover:scale-110`}>
                    {item.icone}
                  </div>
                  <h3 className={`${cardTitleStyle} flex-1`}>{item.titulo}</h3>
                </div>
                <p className={cardDescriptionStyle}>{item.descricao}</p>
                {/* Nota de segurança foi removida conforme solicitado */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-700 text-center"> {/* Removido data-aos temporariamente */}
          <a
            href="/#localizacao" 
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
          >
            Agendar Procedimento ou Tirar Dúvidas
          </a>
        </div>
      </div>
    </div>
  );
}