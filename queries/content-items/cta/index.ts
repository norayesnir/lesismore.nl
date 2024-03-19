import { gql } from "@apollo/client";

export const GetCTA = gql`
	query GetCTA($id: String) {
		CTA(id: $id) {
			quote {
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
		}
	}
`;
