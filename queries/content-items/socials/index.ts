import { gql } from "@apollo/client";
import { IconFragment } from "./getIcon";

export const GetSocials = gql`
  query {
    Socials(id: "e2bd9211-829b-4056-9bb8-8d7bc79c9548") {
      _id
      title
      socials {
        ...GetIconFields
      }
    }
  }
  ${IconFragment}
`;
