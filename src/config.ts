export const siteConfig = {
  // Dados do advogado — editar para cada cliente
  nome: "Dr. Carlos Mendes",
  nomeCompleto: "Carlos Eduardo Mendes",
  oab: "OAB/SP 123.456",
  especialidade: "Advogado Criminalista",
  foto: "/foto-advogado.jpg", // proporção 3:4 recomendada
  ogImage: "", // imagem para redes sociais (1200×630px ideal) — se vazio, usa a foto acima

  // Contato
  telefone: "+55 (11) 99999-9999",
  email: "contato@carlosmendes.adv.br",
  whatsapp: "5511999999999", // formato internacional sem + e sem espaços
  whatsappMensagem: "Olá, Dr. Carlos! Preciso de orientação jurídica criminal.",

  // Localização
  cidade: "São Paulo, SP",
  endereco: "Av. Paulista, 1000 — Sala 501",
  cep: "01310-100",
  bairro: "Bela Vista",

  // Números de autoridade (trust bar)
  anosExperiencia: 15,
  casosResolvidos: 500,
  disponibilidade: "24h / 7 dias",

  // Textos da hero
  headline: "Sua liberdade é nosso compromisso.",
  subheadline:
    "Defesa criminal especializada com foco em resultados. Atuação em inquéritos, flagrantes, Habeas Corpus e recursos.",

  // Serviços
  servicos: [
    {
      icone: "shield",
      titulo: "Defesa Criminal",
      descricao:
        "Representação completa em processos criminais, do inquérito policial ao tribunal do júri, com estratégia personalizada.",
    },
    {
      icone: "gavel",
      titulo: "Habeas Corpus",
      descricao:
        "Atuação imediata para garantir sua liberdade em casos de prisão ilegal ou abuso de autoridade.",
    },
    {
      icone: "clock",
      titulo: "Prisão em Flagrante",
      descricao:
        "Assistência imediata 24 horas para análise e relaxamento de prisão em flagrante.",
    },
    {
      icone: "scale",
      titulo: "Recursos e Apelações",
      descricao:
        "Revisão técnica de condenações com estratégia de defesa em segunda instância e tribunais superiores.",
    },
    {
      icone: "document",
      titulo: "Execução Penal",
      descricao:
        "Acompanhamento na execução da pena: progressão de regime, livramento condicional e direitos do preso.",
    },
    {
      icone: "search",
      titulo: "Investigação Criminal",
      descricao:
        "Defesa desde a fase investigatória para garantir seus direitos durante inquérito policial.",
    },
  ],

  // Depoimentos
  depoimentos: [
    {
      nome: "R.S.",
      texto:
        "Fui preso injustamente e o Dr. Carlos atuou em menos de 24 horas. Obteve o Habeas Corpus e minha liberdade foi restaurada. Profissionalismo e competência incomparáveis.",
      estrelas: 5,
    },
    {
      nome: "M.A.",
      texto:
        "Enfrentei uma acusação gravíssima que ameaçava destruir minha vida. Com a defesa estratégica do Dr. Carlos, fui absolvido. Não tenho palavras para agradecer.",
      estrelas: 5,
    },
    {
      nome: "F.L.",
      texto:
        "Atendimento humano, atencioso e extremamente profissional. Ele explicou cada etapa do processo e esteve disponível sempre que precisei. Resultado excelente.",
      estrelas: 5,
    },
  ],

  // FAQ
  faq: [
    {
      pergunta: "O que devo fazer se for preso em flagrante?",
      resposta:
        "Mantenha a calma e exercite imediatamente seu direito ao silêncio. Não assine nenhum documento sem a presença de um advogado. Solicite que um familiar ou amigo entre em contato com um criminalista de sua confiança o mais rápido possível. O contato imediato com um advogado pode ser determinante para o resultado do seu caso.",
    },
    {
      pergunta: "Quando devo contratar um advogado criminalista?",
      resposta:
        "O quanto antes, melhor. Mesmo na fase de investigação, antes de qualquer indiciamento ou acusação formal, a presença de um advogado é fundamental para proteger seus direitos e orientar sobre como se comportar perante as autoridades.",
    },
    {
      pergunta: "O que é Habeas Corpus e quando pode ser usado?",
      resposta:
        "Habeas Corpus é um remédio constitucional que garante a liberdade de locomoção. Pode ser impetrado quando há prisão ilegal, excesso de prazo da prisão preventiva, constrangimento ilegal à liberdade ou ameaça iminente de prisão arbitrária.",
    },
    {
      pergunta: "Qual a diferença entre prisão preventiva e prisão em flagrante?",
      resposta:
        "A prisão em flagrante ocorre no momento do crime ou logo após. Já a prisão preventiva é decretada pelo juiz durante o processo, quando há indícios de autoria e risco para a ordem pública, investigação ou aplicação da lei penal. Cada modalidade tem requisitos legais específicos que podem ser contestados.",
    },
    {
      pergunta: "O advogado pode me visitar na prisão?",
      resposta:
        "Sim. O direito de acesso do advogado ao preso é garantido pela Constituição e pelo Estatuto da OAB, independentemente da situação processual. O advogado pode visitar seu cliente a qualquer momento, inclusive em horários restritos ao público em geral.",
    },
  ],

  // SEO
  siteUrl: "https://carlosmendes.adv.br",
  metaDescription:
    "Advogado criminalista em São Paulo com mais de 15 anos de experiência. Defesa criminal, Habeas Corpus, prisão em flagrante e recursos. Atendimento 24h.",
  metaKeywords:
    "advogado criminalista São Paulo, defesa criminal, habeas corpus, prisão em flagrante, advogado criminal SP",

  // Redes sociais (deixar vazio para não exibir)
  instagram: "",
  linkedin: "",
};

export type SiteConfig = typeof siteConfig;
