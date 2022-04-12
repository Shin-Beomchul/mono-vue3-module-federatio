import { Product, ProductState } from "./productStore-types";

const getters = {
  list(state: ProductState): Product[] {
    return state.products.map((product) => {
      product.name = product.name + " - m";
      return product;
    });
  },
  one(state: ProductState) {
    return (id: number): Product => state.products[id];
  },
};

export default getters;
