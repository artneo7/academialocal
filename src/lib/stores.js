import { writable } from "svelte/store";

export const modalidades = writable([
  {
    name: 'Musculação',
    slug: 'musculacao',
    img: '/musculacao.jpg'
  },
  {
    name: 'Crossfit',
    slug: 'crossfit',
    img: '/crossfit.jpg'
  },
  {
    name: 'Alongamento',
    slug: 'alongamento',
    img: '/alongamento.jpg'
  },
  {
    name: 'Exercícios em grupo',
    slug: 'exercicios',
    img: '/exercicios.jpg'
  },
  {
    name: 'Natação',
    slug: 'natacao',
    img: '/natacao.jpg'
  }
]);