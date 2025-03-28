export type BookType = (typeof BOOKS)[number]

export const BOOKS = [
  {
    title: 'Robinson Crusoe',
    rate: 4,
    author: 'Daniel Defoe',
    thumbnail: 'robinson-crusoe',
  },
  {
    title: 'Vidas Secas',
    rate: 4.5,
    author: 'Graciliano Ramos',
    thumbnail: 'vidas-secas',
  },
  {
    title: 'O Restaurante no Fim do Universo',
    rate: 4.5,
    author: 'Douglas Adams',
    thumbnail: 'o-restaurante-no-fim-do-universo',
  },
  {
    title: 'O Manifesto Comunista',
    rate: 4.5,
    author: 'Karl Marx, Friedrich Engels',
    thumbnail: 'o-manifesto-comunista',
  },
  {
    title: 'Assassinato no Expresso do Oriente',
    rate: 4.5,
    author: 'Agatha Christie',
    thumbnail: 'assassinato-no-expresso-do-oriente',
  },
  {
    title: 'Funny Creek',
    rate: 4.5,
    author: 'Rafael Scavone, Rafael Albuquerque',
    thumbnail: 'funny-creek',
  },
  {
    title: 'Mitologia Nórdica',
    rate: 4.5,
    author: 'Neil Gaiman',
    thumbnail: 'mitologia-nordica',
  },
  {
    title: 'Arsène Lupin, Contra Herlock Sholmes',
    rate: 4.5,
    author: 'Maurice Leblanc',
    thumbnail: 'arsene-lupin-contra-herlock-sholmes',
  },
  {
    title: 'Alice Através do Espelho',
    rate: 4.5,
    author: 'Lewis Carroll',
    thumbnail: 'alice-atraves-do-espelho',
  },
  {
    title: 'Jogador Número 1',
    rate: 4.5,
    author: 'Ernest Cline',
    thumbnail: 'jogador-numero-1',
  },
  {
    title: 'A Metamorfose',
    rate: 4.5,
    author: 'Franz Kafka',
    thumbnail: 'a-metamorfose',
  },
  {
    title: 'Os Filhos de Odin',
    rate: 4.5,
    author: 'Padraic Colum',
    thumbnail: 'os-filhos-de-odin',
  },
  {
    title: 'A Flecha de Fogo',
    rate: 4.5,
    author: 'Leonel Caldela',
    thumbnail: 'a-flecha-de-fogo',
  },
  {
    title: 'O Homem do Castelo Alto',
    rate: 4.5,
    author: 'Philip K. Dick',
    thumbnail: 'o-homem-do-castelo-alto',
  },
  {
    title: 'Como Fazer Amigos e Influenciar Pessoas',
    rate: 4.5,
    author: 'Dale Carnegie',
    thumbnail: 'como-fazer-amigos-e-influenciar-pessoas',
  },
  {
    title: 'A Volta ao Mundo em 80 Dias',
    rate: 4.5,
    author: 'Júlio Verne',
    thumbnail: 'a-volta-ao-mundo-em-80-dias',
  },
  {
    title: 'Eu, Robô',
    rate: 4.5,
    author: 'Isaac Asimov',
    thumbnail: 'eu-robo',
  },
  {
    title: 'O Fim da Eternidade',
    rate: 4.5,
    author: 'Isaac Asimov',
    thumbnail: 'o-fim-da-eternidade',
  },
  {
    title: 'Auto da Compadecida',
    rate: 4.5,
    author: 'Ariano Suassuna',
    thumbnail: 'auto-da-compadecida',
  },
  {
    title: 'A Regra é Não Ter Regras',
    rate: 4.5,
    author: 'Ben Horowitz',
    thumbnail: 'a-regra-e-nao-ter-regras',
  },
  {
    title: 'A Última Batalha',
    rate: 4.5,
    author: 'C. S. Lewis',
    thumbnail: 'a-ultima-batalha',
  },
  {
    title: 'A Cadeira de Prata',
    rate: 4.5,
    author: 'C. S. Lewis',
    thumbnail: 'a-cadeira-de-prata',
  },
  {
    title: 'A Viagem do Peregrino da Alvorada',
    rate: 4.5,
    author: 'C. S. Lewis',
    thumbnail: 'a-viagem-do-peregrino-da-alvorada',
  },
  {
    title: 'O Principe Caspian',
    rate: 4.5,
    author: 'C. S. Lewis',
    thumbnail: 'o-principe-caspian',
  },
  {
    title: 'O Cavalo e seu Menino',
    rate: 4.5,
    author: 'C. S. Lewis',
    thumbnail: 'o-cavalo-e-seu-menino',
  },
  {
    title: 'O Leão, a Feiticeira e o Guarda-Roupa',
    rate: 4.5,
    author: 'C. S. Lewis',
    thumbnail: 'o-leao-a-feiticeira-e-o-guarda-roupa',
  },
  {
    title: 'O Sobrinho do Mago',
    rate: 4.5,
    author: 'C. S. Lewis',
    thumbnail: 'o-sobrinho-do-mago',
  },
  {
    title: 'O Oceano no Fim do Caminho',
    rate: 4.5,
    author: 'Neil Gaiman',
    thumbnail: 'o-oceano-no-fim-do-caminho',
  },
  {
    title: 'O Velho e o Mar',
    rate: 4.5,
    author: 'Ernest Hemingway',
    thumbnail: 'o-velho-e-o-mar',
  },
  {
    title: 'Viagem ao Centro da Terra',
    rate: 4.5,
    author: 'Júlio Verne',
    thumbnail: 'viagem-ao-centro-da-terra',
  },
  {
    title: 'Arsène Lupin, Ladrão de Casaca',
    rate: 4.5,
    author: 'Maurice Leblanc',
    thumbnail: 'arsene-lupin-ladrao-de-casaca',
  },
  {
    title: 'O Meu Pé de Laranja Lima',
    rate: 4.5,
    author: 'José Mauro de Vasconcelos',
    thumbnail: 'o-meu-pe-de-laranja-lima',
  },
  {
    title: '1984',
    rate: 4.5,
    author: 'George Orwell',
    thumbnail: '1984',
  },
  {
    title: 'O Sol é para Todos',
    rate: 4.5,
    author: 'Harper Lee',
    thumbnail: 'o-sol-e-para-todos',
  },
  {
    title: 'A Vida Invisível de Eurídice Gusmão',
    rate: 4.5,
    author: 'Martha Batalha',
    thumbnail: 'a-vida-invisivel-de-euridice-gusmao',
  },
  {
    title: 'Deuses Americanos',
    rate: 4.5,
    author: 'Neil Gaiman',
    thumbnail: 'deuses-americanos',
  },
  {
    title: 'Rangers - Ruínas de Gorlan',
    rate: 4.5,
    author: 'John Flanagan',
    thumbnail: 'rangers-ruinas-de-gorlan',
  },
  {
    title: 'Alice no País das Maravilhas',
    rate: 4.5,
    author: 'Lewis Carroll',
    thumbnail: 'alice-no-pais-das-maravilhas',
  },
  {
    title: 'Farhenheit 451',
    rate: 4.5,
    author: 'Ray Bradbury',
    thumbnail: 'farhenheit-451',
  },
  {
    title: 'Maus',
    rate: 4.5,
    author: 'Art Spiegelman',
    thumbnail: 'maus',
  },
  {
    title: 'A Revolução dos Bichos',
    rate: 4.5,
    author: 'George Orwell',
    thumbnail: 'a-revolucao-dos-bichos',
  },
  {
    title: 'Coraline',
    rate: 4.5,
    author: 'Neil Gaiman',
    thumbnail: 'coraline',
  },
  {
    title: 'Os Condenados',
    rate: 4.5,
    author: 'Andrew Pyper',
    thumbnail: 'os-condenados',
  },
  {
    title: 'Essencialismo',
    rate: 4.5,
    author: 'Greg McKeown',
    thumbnail: 'essencialismo',
  },
  {
    title: 'Aperte o F5',
    rate: 4.5,
    author: 'Satya Nadella',
    thumbnail: 'aperte-o-f5',
  },
  {
    title: 'Capitães da Areia',
    rate: 4.5,
    author: 'Jorge Amado',
    thumbnail: 'capitaes-da-areia',
  },
  {
    title: 'O Guia do Mochileiro das Galáxias',
    rate: 4.5,
    author: 'Douglas Adams',
    thumbnail: 'o-guia-do-mochileiro-das-galaxias',
  },
  {
    title: 'Sangue, Suor e Pixels',
    rate: 5,
    author: 'Jason Schreier',
    thumbnail: 'sangue-suor-e-pixels',
  },
  {
    title: 'O Hobbit',
    rate: 4.5,
    author: 'J. R. R. Tolkien',
    thumbnail: 'o-hobbit',
  },
  {
    title: 'O Menino do Pijama Listrado',
    rate: 4.5,
    author: 'John Boyne',
    thumbnail: 'o-menino-do-pijama-listrado',
  },
  {
    title: 'O Monge e o Executivo',
    rate: 4.5,
    author: 'James C. Hunter',
    thumbnail: 'o-monge-e-o-executivo',
  },
  {
    title: 'A Droga da Obediência',
    rate: 4.5,
    author: 'Pedro Bandeira',
    thumbnail: 'a-droga-da-obediencia',
  },
] as const
