import { gql } from "@apollo/client";
import { ButtonFragment } from "./getButtons";

export const GetHero = gql`
	query {
		Hero {
			_id
			title
			text
			buttons {
				__typename
				...GetButtonFields
			}
			image {
				_id
				url
			}
			background_color
			type
		}
	}
	${ButtonFragment}
`;
