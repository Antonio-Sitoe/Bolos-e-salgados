export interface IProduct {
  id: number,
  attributes: {
    category: string
    description: string
    image: {}
    name: string
    price: 1500
  }
}
export interface Ikit {
  title: string,
  description: string,
  image: {
    name: string,
    url: string,
  },
}

export interface HomeProps {
  error: Boolean
  banner: {
    banner_title: string,
    Banner_img: string
  }
  kit: Ikit
  featured: {
    featuredData: {
      description: string
      id: number
      title: string
    }[]
    productData: {
      cup: IProduct[]
      doces: IProduct[]
      salgados: IProduct[]
    }
  },
}


