export interface IProduct {
  id: number;
  title: string;
  price_new: number;
  price_old?: number;
  price_symbol: string;
  material?: string;
  seasons?: string[];
  images: string[];
}

export interface ICategory {
  id: number;
  title: string;
  image: string;
}

export interface ICollection {
  id: number;
  title: string;
  image: string;
}

export interface ISocial {
  id: number;
  link: string;
  iconName: string;
}

export interface IPayment {
  id: number;
  iconName: string;
}
