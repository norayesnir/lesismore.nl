import { gql } from "@apollo/client";
import { MenuItemFragment } from "./getMenuItem";

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
