import { gql } from "@apollo/client";

export const IconFragment = gql`
  fragment GetIconFields on Social {
    href
    icon {
      name
      shortcode
      asset {
        url
      }
    }
  }
`;
