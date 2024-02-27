import { gql } from "@apollo/client";
import { GetRoutesFragment } from "./get-routes";
import { MenuCTAFragment } from "./get-cta";

export const GetMainNavigation = gql`
  query {
    Navigation(id: "74daf973-00a6-44a8-ad7e-3a589b64d46d") {
      _id
      title
      _slug
      menu_items {
        __typename
        ...GetRoutesFields
      }
      ...GetCTAFields
    }
  }
  ${GetRoutesFragment}
  ${MenuCTAFragment}
`;
