export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
}

export type Category = 'All' | 'Burgers' | 'Pizza' | 'Pasta' | 'Salads' | 'Main' | 'Desserts' | 'Drinks' | 'Sushi';