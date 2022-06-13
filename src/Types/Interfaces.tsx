export interface IProduct {
  id: number;
  attributes: {
    category: string;
    description: string;
    image: {};
    name: string;
    price: 1500;
  };
}
export interface Ikit {
  title: string;
  description: string;
  image: {
    name: string;
    url: string;
  };
}
export interface IProductData {
  cup: IProduct[];
  doces: IProduct[];
  salgados: IProduct[];
}

export interface Banner {
  banner_title: string;
  Banner_img: string;
}

export interface IfeaturedData {
  description: string;
  id: number;
  title: string;
}

export interface IPagesProps {
  error: Boolean;
  banner: Banner;
  kit?: Ikit;
  featured: {
    featuredData: IfeaturedData[];
    productData: IProductData;
  };
}
