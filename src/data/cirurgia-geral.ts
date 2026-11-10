export const cirurgiaGeralIntro =
  "A Cirurgia Geral é a especialidade médica que se dedica ao diagnóstico e tratamento cirúrgico de diversas doenças.";

export const cirurgiaGeralTopics = [
  {
    id: "pedra-na-vesicula",
    title: "Pedra na Vesícula (Colelitíase) — O que é e como tratar?",
    image: "/colelitiase.png",
    imageAlt: "Ilustração médica de pedra na vesícula mostrando anatomia",
    blocks: [
      {
        kind: "text" as const,
        title: "O que é pedra na vesícula?",
        paragraphs: [
          "A vesícula biliar armazena a bile, líquido essencial para a digestão de gorduras. Quando a bile fica muito concentrada ou desequilibrada, podem se formar pequenas pedras (cálculos) dentro dela.",
        ],
      },
      {
        kind: "list" as const,
        title: "Sintomas",
        items: [
          "Muitas pessoas são assintomáticas.",
          "Dor forte no lado direito da barriga (cólica biliar), pior após ingestão de gordura.",
          "Náusea, vômito e desconforto abdominal.",
          "Casos graves: inflamação (colecistite) ou outras complicações.",
        ],
      },
      {
        kind: "warning" as const,
        title: "Tem risco?",
        intro: "Se não tratar, as pedras podem causar complicações sérias como:",
        items: [
          "Inflamação da vesícula (colecistite).",
          "Icterícia (pele e olhos amarelados).",
          "Pancreatite (inflamação do pâncreas).",
        ],
      },
      {
        kind: "text" as const,
        title: "Tratamento",
        paragraphs: [
          "O tratamento definitivo para pedras na vesícula sintomáticas é a cirurgia para remoção da vesícula (colecistectomia). Geralmente, é feita por videolaparoscopia (técnica minimamente invasiva).",
        ],
      },
    ],
  },
  {
    id: "hernia",
    title: "Hérnias Abdominais — O que são e como tratar?",
    image: "/hernia.png",
    imageAlt: "Ilustração de hérnia abdominal",
    blocks: [
      {
        kind: "text" as const,
        title: "O que é hérnia?",
        paragraphs: [
          "Hérnia é um abaulamento (caroço) que surge no corpo, comummente na barriga ou virilha. Ocorre quando parte de um órgão interno (como gordura ou intestino) se projeta através de uma área enfraquecida nos músculos. Esse abaulamento pode aumentar com esforço, tosse ou ao ficar de pé.",
        ],
      },
      {
        kind: "list" as const,
        title: "Sintomas comuns",
        items: [
          "Presença de um abaulamento ou caroço visível, que pode desaparecer ao deitar.",
          "Desconforto ou dor na região, especialmente ao realizar esforço físico, levantar peso ou tossir.",
          "Em casos graves (hérnia encarcerada ou estrangulada), pode ocorrer dor intensa e contínua, náuseas, vômitos e alterações no trânsito intestinal, configurando uma urgência médica.",
        ],
      },
      {
        kind: "warning" as const,
        title: "Tem risco?",
        intro:
          "Embora nem toda hérnia seja uma emergência, ela não se cura sozinha. O principal risco é o estrangulamento, onde o conteúdo da hérnia fica preso e tem seu suprimento sanguíneo cortado. Esta é uma complicação grave que exige cirurgia de emergência para evitar danos aos órgãos.",
        items: [],
      },
      {
        kind: "text" as const,
        title: "Tratamento",
        paragraphs: [
          "O único tratamento definitivo para hérnias é a correção cirúrgica. O objetivo é reposicionar o tecido ou órgão para dentro da cavidade abdominal e reforçar a área enfraquecida da parede muscular, geralmente com o uso de uma tela sintética.",
          "As técnicas cirúrgicas incluem a cirurgia convencional (aberta), realizada através de um corte na região da hérnia, e a videolaparoscopia, técnica minimamente invasiva, realizada com pequenas incisões e o auxílio de uma câmera.",
        ],
      },
    ],
  },
  {
    id: "outras-doencas",
    title: "Outros procedimentos cirúrgicos comuns",
    image: "/outras.png",
    imageAlt: "Ilustração de outros procedimentos de cirurgia geral",
    blocks: [
      {
        kind: "text" as const,
        title: "Procedimentos",
        paragraphs: [
          "Além das cirurgias de hérnia e pedra na vesícula, também realizo procedimentos cirúrgicos comuns na prática médica.",
        ],
      },
      {
        kind: "text" as const,
        title: "Fimose (postectomia/circuncisão)",
        paragraphs: [
          "Procedimento realizado para tratar a dificuldade de exposição da glande.",
        ],
      },
      {
        kind: "text" as const,
        title: "Cisto pilonidal",
        paragraphs: [
          "Remoção de cisto ou abscesso que aparece na região do cóccix (região sacral), geralmente causado pelo encravamento de pelos. Pode gerar dor, inflamação e secreção. O tratamento é cirúrgico, removendo o cisto e permitindo a cicatrização adequada.",
        ],
      },
      {
        kind: "text" as const,
        title: "Hidrocele",
        paragraphs: [
          "É o acúmulo de líquido ao redor do testículo, formando um aumento de volume na bolsa escrotal. O tratamento é feito por meio de cirurgia, geralmente com alta no mesmo dia.",
        ],
      },
      {
        kind: "text" as const,
        title: "Vasectomia",
        paragraphs: [
          "Método de contracepção masculina de caráter definitivo: interrompe a passagem dos espermatozoides. O procedimento é feito de forma ambulatorial.",
        ],
      },
      {
        kind: "text" as const,
        title: "Como são feitas",
        paragraphs: [
          "Esses procedimentos podem ser feitos com técnica aberta ou minimamente invasiva, conforme a avaliação de cada caso.",
        ],
      },
    ],
  },
];
