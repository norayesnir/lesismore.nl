import { gql } from "@apollo/client";

export const HeroFragment = gql`
	fragment HeroFields on Page {
		_id
		__typename
		title
		text
		image {
			_id
			url
			caption
		}
		buttons {
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
		background_color
		alignment
		rounding
	}
`;
