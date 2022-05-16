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

