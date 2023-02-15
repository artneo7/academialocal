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
  }
]);