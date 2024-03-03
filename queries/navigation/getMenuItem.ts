import { gql } from "@apollo/client";

export const MenuItemFragment = gql`
  fragment MenuItemFields on MenuItem {
    _id
    title
    link_to_page {
      __typename
    }
    link_to_external_page
    description
    icon {
      _id
      url
    }
  }
`;
