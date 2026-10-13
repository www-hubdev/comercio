/* ============ BASE DE DADOS DO SITE ============
   Para adicionar um profissional: copia um bloco abaixo, cola no fim da lista
   (com vírgula) e guarda as fotos na pasta /img com o nome indicado.
   Os 4 primeiros são EXEMPLOS: apaga-os quando tiveres profissionais reais. */
const CATEGORIAS = [
 {n:"Canalizador",i:"🔧",t:"Serviços manuais"},{n:"Electricista",i:"💡",t:"Serviços manuais"},
 {n:"Pedreiro",i:"🧱",t:"Serviços manuais"},{n:"Pintor",i:"🎨",t:"Serviços manuais"},
 {n:"Carpinteiro",i:"🪚",t:"Serviços manuais"},{n:"Mecânico",i:"🚗",t:"Serviços manuais"},
 {n:"Diarista",i:"🧹",t:"Serviços manuais"},{n:"Cabeleireiro / Barbeiro",i:"✂️",t:"Serviços manuais"},
 {n:"Explicador (aulas ao domicílio)",i:"📚",t:"Ao domicílio"},
 {n:"Design gráfico",i:"🖌️",t:"Freelancer"},{n:"Programação / Web",i:"💻",t:"Freelancer"},
 {n:"Fotografia e vídeo",i:"📷",t:"Freelancer"},{n:"Tradução",i:"🌍",t:"Freelancer"}
];
const PROFISSIONAIS = [
 {id:1,nome:"Manuel Quimbanda (exemplo)",idade:38,categoria:"Canalizador",zona:"Moçâmedes",morada:"Bairro Torres, Moçâmedes",
  whatsapp:"244900000001",experiencia:"12 anos",servicos:["Reparação de fugas","Instalação de casas de banho","Desentupimentos"],
  descricao:"Canalizador com mais de 12 anos de experiência em casas e comércios. Trabalho limpo, pontual e com garantia.",
  foto:"",trabalhos:[]},
 {id:2,nome:"Joaquim Tchipilica (exemplo)",idade:33,categoria:"Electricista",zona:"Luanda",morada:"Viana, Luanda",
  whatsapp:"244900000002",experiencia:"8 anos",servicos:["Instalações eléctricas","Quadros e disjuntores","Iluminação"],
  descricao:"Electricista certificado. Instalações novas, reparações urgentes e manutenção de edifícios.",
  foto:"",trabalhos:[]},
 {id:3,nome:"Ana Paula Kiala (exemplo)",idade:27,categoria:"Explicador (aulas ao domicílio)",zona:"Benguela",morada:"Centro, Benguela",
  whatsapp:"244900000003",experiencia:"5 anos",servicos:["Matemática","Português","Preparação de exames"],
  descricao:"Professora com experiência em explicações para o ensino primário e I ciclo, na casa do aluno.",
  foto:"",trabalhos:[]},
 {id:4,nome:"Carlos Mbala (exemplo)",idade:29,categoria:"Design gráfico",zona:"Luanda",morada:"Talatona, Luanda",
  whatsapp:"244900000004",experiencia:"6 anos",servicos:["Logótipos","Cartazes e flyers","Redes sociais"],
  descricao:"Designer freelancer. Crio a imagem do teu negócio, do logótipo ao cartão de visita.",
  foto:"",trabalhos:[]}
 /* Exemplo com fotos reais:
 ,{id:5,nome:"Nome",idade:30,categoria:"Pintor",zona:"Lubango",morada:"Bairro X",whatsapp:"2449XXXXXXXX",
  experiencia:"4 anos",servicos:["Pintura interior"],descricao:"...",
  foto:"img/nome.jpg",trabalhos:["img/nome-1.jpg","img/nome-2.jpg"]} */
];
const DONO={whatsapp:"244944576596",tel:"+244944576596",email:"felisbertosambambi12@gmail.com"};
