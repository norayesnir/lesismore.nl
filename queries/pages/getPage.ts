import { gql } from "@apollo/client";

export const GetPage = gql`
	query GetPage($slug: String) {
		Page(slug: $slug) {
			_id
			_slug
			title
			hero {
				_id
				title
				text
				image {
					_id
					url
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
		}
	}
`;
