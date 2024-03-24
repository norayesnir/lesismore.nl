import { gql } from "@apollo/client";

export const ContentFragment = gql`
	fragment GetContentFields on Content {
		_id
		__typename
		title
		text
		rounding
		buttons {
			_id
			__typename
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
		image {
			_id
			__typename
			url
		}
		background_color
		alignment
	}
`;
