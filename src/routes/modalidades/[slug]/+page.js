let modalidades = [
  {
    name: 'Musculação',
    slug: 'musculacao',
    img: '/musculacao.jpg',
    content: 'Treinos de musculação individual ou em grupo.'
  },
  {
    name: 'Crossfit',
    slug: 'crossfit',
    img: '/crossfit.jpg',
    content: 'Treinos de crossfit individual ou em grupo.'
  },
  {
    name: 'Alongamento',
    slug: 'alongamento',
    img: '/alongamento.jpg',
    content: 'Treinos de alongamento individual ou em grupo.'
  },
  {
    name: 'Exercícios em grupo',
    slug: 'exercicios',
    img: '/exercicios.jpg',
    content: 'Exercícios individual ou em grupo.'
  },
  {
    name: 'Natação',
    slug: 'natacao',
    img: '/natacao.jpg',
    content: 'Natação individual ou em grupo.'
  }
];

export function load({ params }) {
  let data = modalidades.find(e => e.slug === params.slug);
  
  return data;
}