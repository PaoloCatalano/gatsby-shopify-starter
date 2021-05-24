import { graphql } from 'gatsby';

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    images {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            quality: 100
            placeholder: BLURRED
          )
        }
      }
    }
    title
    description
    shopifyId
  }
`;
