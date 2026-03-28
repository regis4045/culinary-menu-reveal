import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Gourmet Burger',
    description: 'A juicy beef patty with melting cheddar, caramelized onions, and fresh lettuce on a brioche bun.',
    price: 16.99,
    category: 'Burgers',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/classic-burger-f46b7fe0-1774718013966.webp',
    isPopular: true
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Traditional wood-fired pizza with bubbling mozzarella, fresh tomato sauce, and aromatic basil.',
    price: 14.50,
    category: 'Pizza',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/margherita-pizza-7bf7505b-1774718015168.webp',
    isPopular: true
  },
  {
    id: '3',
    name: 'Mediterranean Salad',
    description: 'Crisp greens, kalamata olives, feta cheese, and cherry tomatoes with extra virgin olive oil.',
    price: 12.99,
    category: 'Salads',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/mediterranean-salad-36d14b1f-1774718014273.webp'
  },
  {
    id: '4',
    name: 'Fettuccine Alfredo',
    description: 'Creamy fettuccine pasta with aged parmesan, butter, and a hint of fresh garlic and parsley.',
    price: 18.50,
    category: 'Pasta',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/fettuccine-alfredo-4695a4c1-1774718014260.webp'
  },
  {
    id: '5',
    name: 'Grilled Ribeye Steak',
    description: 'Premium ribeye grilled to perfection, served with garlic herb butter and rosemary.',
    price: 34.99,
    category: 'Main',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/grilled-ribeye-steak-dc30c948-1774718014283.webp',
    isPopular: true
  },
  {
    id: '6',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with fresh raspberries and powdered sugar.',
    price: 9.50,
    category: 'Desserts',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/chocolate-lava-cake-8b863284-1774718013005.webp'
  },
  {
    id: '7',
    name: 'Classic Mojito',
    description: 'Refreshing muddled mint, fresh lime, white rum, and a splash of sparkling soda.',
    price: 11.00,
    category: 'Drinks',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/classic-mojito-a47a7490-1774718014184.webp'
  },
  {
    id: '8',
    name: 'Premium Sushi Platter',
    description: 'A selection of fresh nigiri and gourmet uramaki rolls served with wasabi and pickled ginger.',
    price: 28.00,
    category: 'Sushi',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/704faa4c-584c-417a-ae41-eb6a69e11e28/premium-sushi-platter-2c9cc6c4-1774718020234.webp',
    isPopular: true
  }
];

export const CATEGORIES: string[] = ['All', 'Burgers', 'Pizza', 'Pasta', 'Salads', 'Main', 'Desserts', 'Drinks', 'Sushi'];