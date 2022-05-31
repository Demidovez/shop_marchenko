export interface IProduct {
  id: number;
  title: string;
  link: string;
  price_new: number;
  price_old?: number;
  price_symbol: string;
  material?: string;
  seasons?: string[];
  images: string[];
  options?: EProductOption[];
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
  link: string;
}

export interface ISocial {
  id: number;
  link: string;
  iconName: string;
}

export interface IPayment {
  id: number;
  iconName: string;
  width?: number;
  height?: number;
}

export interface IMenuItem {
  title: string;
  link?: string;
  children?: IMenuItem[];
}

export enum EProductOption {
  BEST,
  FAVORITE,
}
