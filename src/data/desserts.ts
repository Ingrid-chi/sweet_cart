import type { Dessert } from '../types/dessert';

import waffleImg from '../assets/waffle-with-Berries.jpg';
import bruleeImg from '../assets/vanilla-bean-creme-brulee.jpg';
import macaronImg from '../assets/macaron-mix-of-five.jpg';
import tiramisuImg from '../assets/classic-tiramisu.jpg';
import baklavaImg from '../assets/pistachio-baklava.jpg';
import meringueImg from '../assets/lemon-meringue-pie.jpg';
import cakeImg from '../assets/red-velvet-cake.jpg';
import brownieImg from '../assets/salted-caramel-brownie.jpg';
import pannaCottaImg from '../assets/vanilla-panna-cotta.jpg';

export const desserts: Dessert[] = [
  {
    id: 1,
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
    image: waffleImg,
  },
  {
    id: 2,
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
    image: bruleeImg,
  },
  {
    id: 3,
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
    image: macaronImg,
  },
  {
    id: 4,
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
    image: tiramisuImg,
  },
  {
    id: 5,
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
    image: baklavaImg,
  },
  {
    id: 6,
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
    image: meringueImg,
  },
  {
    id: 7,
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
    image: cakeImg,
  },
  {
    id: 8,
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 5.5,
    image: brownieImg,
  },
  {
    id: 9,
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
    image: pannaCottaImg,
  },
];
