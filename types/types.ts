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
