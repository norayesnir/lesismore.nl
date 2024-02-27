import { gql } from "@apollo/client";
import { MenuItemFragment } from "./menu-item-fragment";

export const GetRoutesFragment = gql`
  fragment GetRoutesFields on MenuItem {
    ...MenuItemFields
    children {
      __typename
      ...MenuItemFields
    }
  }
  ${MenuItemFragment}
`;
