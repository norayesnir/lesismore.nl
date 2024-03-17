import { gql } from "@apollo/client";

export const GetButtons = gql`
	query Button($id: String!) {
		Button(id: $id) {
			_id
			title
			color
			type
			icon_shortcode
			alignment
			link_to_page {
				_slug
			}
			icon {
				url
			}
		}
	}
`;
