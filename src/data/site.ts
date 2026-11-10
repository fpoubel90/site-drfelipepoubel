export const siteUrl = "https://drfelipepoubel.com.br";

export const physician = {
  publicName: "Dr. Felipe Poubel",
  fullName: "Felipe Poubel Timm do Carmo",
  crm: "CRM-ES 13423",
  rqe: "RQE 11122 – Cirurgia Geral",
};

export const defaultDescription =
  "Site do Dr. Felipe Poubel, com informações sobre cirurgia geral, cuidados com a pele, cirurgia dermatológica e câncer de pele. Atendimento no interior do Espírito Santo.";

export const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/areas", label: "Áreas de atuação" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export const social = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/felipe.poubel?locale=pt_BR",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/felipe.poubel",
  },
];

export const locations = [
  {
    id: "lustig",
    name: "Clínica Lustig",
    city: "Laranja da Terra",
    lines: ["Av. Davi Schraiber, 54 - loja 01", "Laranja da Terra - ES, 29615-000"],
    shortAddress: "Av. Davi Schraiber, 54",
    streetAddress: "Av. Davi Schraiber, 54 - loja 01",
    locality: "Laranja da Terra",
    postalCode: "29615-000",
    phoneDisplay: "(27) 99530-4076",
    phoneHref: "https://wa.me/5527995304076",
    phoneSchema: "+55-27-99530-4076",
  },
  {
    id: "hsv",
    name: "Hospital São Vicente de Paulo",
    city: "Afonso Cláudio",
    lines: ["R. José Giestas, Nº 63 - Centro", "Afonso Cláudio - ES, 29600-000"],
    shortAddress: "R. José Giestas, 63",
    streetAddress: "R. José Giestas, Nº 63 - Centro",
    locality: "Afonso Cláudio",
    postalCode: "29600-000",
    phoneDisplay: "(27) 98880-6052",
    phoneHref: "https://wa.me/5527988806052",
    phoneSchema: "+55-27-98880-6052",
  },
] as const;

export const bio = {
  hero: "Impulsionado pela vocação para a medicina e o desejo genuíno de fazer a diferença na vida das pessoas, uno minha paixão pela cirurgia à dedicação aos cuidados com a pele. Ofereço um atendimento que combina a precisão da cirurgia geral com a atenção integral à saúde da sua pele, sempre com foco no seu bem-estar.",
  formation:
    "Formado em Medicina pela EMESCAM em 2015, concluí minha residência em Cirurgia Geral na Santa Casa de Misericórdia de Vitória em 2019. Para aprimorar meus conhecimentos na área de cuidados com a pele, realizei duas pós-graduações (na FGV, concluída em 2022 e na Afya, concluída em 2025).",
  practice:
    "Minha prática médica é dedicada tanto à realização de cirurgias gerais de pequeno e médio porte, quanto ao manejo de diversas condições e lesões da pele, incluindo a execução de pequenas cirurgias cutâneas.",
  mission:
    "Minha missão é oferecer uma medicina humanizada, próxima do paciente, com escuta ativa e foco na resolutividade.",
};

export const areas = [
  {
    href: "/areas/cirurgia-geral",
    title: "Cirurgia geral",
    image: "/cirurgiageral.jpeg",
    imageAlt: "Ilustração de uma sala de cirurgia",
    illustrative: false,
    summary:
      "A Cirurgia Geral é a especialidade médica que se dedica ao diagnóstico e tratamento cirúrgico de diversas doenças.",
  },
  {
    href: "/areas/cuidados-com-a-pele",
    title: "Cuidados com a pele",
    image: "/dermatoscopio.png",
    imageAlt: "Ilustração educativa de um exame de pinta com dermatoscópio",
    illustrative: true,
    summary: "Atua em cuidados com a pele e em cirurgia dermatológica.",
  },
  {
    href: "/areas/cirurgia-dermatologica",
    title: "Cirurgia dermatológica",
    image: "/consultorio.png",
    imageAlt: "Ilustração de atendimento em consultório",
    illustrative: true,
    summary: "Pequenas cirurgias de pele realizadas em consultório.",
  },
  {
    href: "/areas/cancer-de-pele",
    title: "Câncer de pele",
    image: "/melanoma.png",
    imageAlt: "Ilustração educativa de lesão pigmentada da pele",
    illustrative: true,
    summary: "O que é, seus tipos, como identificar, prevenir e opções de tratamento.",
  },
] as const;

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: physician.fullName,
    alternateName: physician.publicName,
    url: siteUrl,
    image: `${siteUrl}/VIT_7655.jpg`,
    medicalSpecialty: "Cirurgia Geral",
    address: locations.map((place) => ({
      "@type": "PostalAddress",
      streetAddress: place.streetAddress,
      addressLocality: place.locality,
      addressRegion: "ES",
      postalCode: place.postalCode,
      addressCountry: "BR",
    })),
    telephone: locations.map((place) => place.phoneSchema),
    sameAs: social.map((item) => item.href),
  };
}
