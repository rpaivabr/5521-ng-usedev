export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; 
}

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Camiseta Capy', 
    description: 'Camiseta estampada com design exclusivo de capivara.', 
    price: 25,
    imageUrl: 'images/product-capy.png', 
  },
  {
    id: 2,
    name: 'Mousepad Café',
    description: 'Mousepad com estampa temática de café para os amantes da bebida.',
    price: 18,
    imageUrl: 'images/product-mousepad.png',
  },
  { 
    id: 3, 
    name: 'Caneca Bug', 
    description: 'Caneca divertida com estampa de bug de software.',
    price: 28,
    imageUrl: 'images/product-caneca.png', 
  },
  {
    id: 4,
    name: 'Boné 404',
    description: 'Boné estiloso com a mensagem "Error 404: Not Found".',
    price: 25,
    imageUrl: 'images/product-bone.png',
  },
  {
    id: 5,
    name: 'Quadro While',
    description: 'Quadro decorativo com arte inspirada em loops de programação.',
    price: 22,
    imageUrl: 'images/product-quadro.png',
  },
  {
    id: 6,
    name: 'Copo Vida de Dev',
    description: 'Copo com a frase "Vida de Dev" para os programadores de plantão.',
    price: 28,
    imageUrl: 'images/product-copo.png',
  },
  {
    id: 7,
    name: 'Abridor de garrafa',
    description: 'Abridor de garrafa prático e estiloso para suas bebidas.',
    price: 12,
    imageUrl: 'images/product-abridor.png',
  },
  {
    id: 8,
    name: 'Camiseta Estágios',
    description: 'Camiseta com estampa divertida sobre os estágios de um desenvolvedor.',
    price: 5,
    imageUrl: 'images/product-camiseta.png',
  }
];