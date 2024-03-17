import { gql } from "@apollo/client";

export const ButtonFragment = gql`
	fragment GetButtonFields on Button {
		_id
		title
		link_to_page {
			__typename
			_id
			_slug
		}
		color
		type
		icon_shortcode
		icon {
			_id
			url
		}
		alignment
	}
`;
