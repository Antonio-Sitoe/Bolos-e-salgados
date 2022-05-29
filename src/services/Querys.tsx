import { gql } from 'graphql-request';


export const HOME_QUERY = gql`
{
  homes {
    id
    kit {
      kitImage {
        url
      }
      kitTitle
      kitDescription {
        text
      }
    }
    banner_image {
      id
      bannerTitle
      bannerImage {
        url
      }
    }
  }
}
`

export const PRODUTS_QUERY = gql`{
  products {
    id
    images {
      url
    }
    name
    price
    slug
    orderItems {
      id
      quantity
      total
    }
  }
}`
