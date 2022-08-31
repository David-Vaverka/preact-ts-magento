// todo use codegen:generate

export interface GetProductItem {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export interface GetProduct {
  items: GetProductItem[];
}
