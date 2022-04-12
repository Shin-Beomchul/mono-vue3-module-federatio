export interface Product {
  id: string;
  name: string;
  cost: number;
  src: string;
}

export interface ProductState {
  products: Product[];
}
