import { gql } from "@apollo/client";
import { IconFragment } from "./getIcon";

export const GetSocials = gql`
	query {
		Socials {
			_id
			title
			socials {
				...GetIconFields
			}
		}
	}
	${IconFragment}
`;
