export const tiposDeCancer = [
  {
    id: "cbc",
    title: "Carcinoma basocelular (CBC)",
    image: "/cbc.png",
    imageAlt: "Imagem clínica de um carcinoma basocelular",
    subtext: "Mais comum, menos agressivo.",
    paragraphs: [
      "Apresenta crescimento lento e raramente causa metástase (espalha para outros órgãos).",
      "Geralmente surge como uma lesão que se assemelha a uma pequena ferida que não cicatriza, um nódulo de aparência brilhante (perolado), avermelhado, ou com casquinhas e crostas centrais.",
    ],
  },
  {
    id: "cec",
    title: "Carcinoma espinocelular (CEC)",
    image: "/cec.png",
    imageAlt: "Imagem clínica de um carcinoma espinocelular",
    subtext: "Mais agressivo que o CBC.",
    paragraphs: [
      "Pode gerar metástase se não for tratado precocemente.",
      "Caracteriza-se por uma lesão endurecida, de superfície áspera, avermelhada ou acastanhada. Tende a crescer mais rapidamente, podendo ulcerar (formar uma ferida) ou sangrar com facilidade.",
      "É mais frequente em áreas do corpo com exposição solar crônica, como face, orelhas, couro cabeludo e lábios.",
    ],
  },
  {
    id: "melanoma",
    title: "Melanoma",
    image: "/melanoma.png",
    imageAlt: "Imagem clínica de um melanoma",
    subtext: "O mais grave e perigoso dos cânceres de pele.",
    paragraphs: [
      "Possui alta chance de metástase se não for diagnosticado e tratado em seus estágios iniciais.",
      "Geralmente se manifesta como uma pinta (nevo) ou mancha escura (marrom ou preta) que apresenta mudanças em sua forma, cor, tamanho, ou que começa a apresentar sintomas como coceira, dor ou sangramento.",
    ],
    abcde: [
      "Assimetria: uma metade da lesão é diferente da outra.",
      "Bordas irregulares: contornos entalhados, chanfrados ou mal definidos.",
      "Cores múltiplas: presença de várias cores (preto, marrom, tons de branco, avermelhado ou azul) na mesma lesão.",
      "Diâmetro: geralmente maior que 6 mm (tamanho da borracha de um lápis), embora melanomas menores possam ocorrer.",
      "Evolução: mudanças recentes na aparência da lesão (cor, tamanho, forma, relevo) ou o surgimento de sintomas como coceira, sensibilidade ou sangramento.",
    ],
  },
  {
    id: "lesoes-precancerigenas",
    title: "Lesões pré-cancerígenas",
    image: "/ceratose-actinica.png",
    imageAlt: "Imagem clínica de queratose actínica",
    subtext: "Queratose actínica (QA) — lesão precursora do CEC.",
    paragraphs: [
      "São lesões cutâneas ásperas ao toque (semelhantes a uma lixa), geralmente avermelhadas ou da cor da pele, que podem apresentar descamação.",
      "Surgem predominantemente em áreas do corpo com alta exposição solar crônica, como face, couro cabeludo (em indivíduos calvos), orelhas, dorso das mãos e antebraços.",
      "É fundamental o tratamento das queratoses actínicas, pois uma porcentagem delas pode evoluir para um carcinoma espinocelular (CEC) invasivo.",
    ],
  },
];

export const prevencao = [
  "Use protetor solar diariamente (FPS 30 ou mais), mesmo em dias nublados, e reaplique a cada 2 horas ou após sudorese intensa.",
  "Proteja-se com chapéus de abas largas, roupas com proteção UV e óculos de sol.",
  "Evite a exposição solar direta entre 10h e 16h, quando a radiação UV é mais intensa.",
  "Realize autoexame da pele regularmente e consulte um médico para check-ups anuais ou sempre que notar alguma alteração suspeita.",
];

export const tratamentos = [
  "Cirurgia excisional: remoção do tumor com margens de segurança.",
  "Cirurgia micrográfica de Mohs: técnica de alta precisão usada para preservar tecido sadio.",
  "Curetagem e eletrocoagulação: para lesões superficiais.",
  "Crioterapia: congelamento com nitrogênio líquido.",
  "Terapia fotodinâmica (PDT): luz e substâncias fotossensibilizantes.",
  "Terapias tópicas: cremes ou géis específicos.",
  "Radioterapia e terapias sistêmicas: para casos avançados.",
];
