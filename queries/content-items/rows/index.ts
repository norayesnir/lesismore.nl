import { gql } from "@apollo/client";

export const GetRows = gql`
	query GetRows($id: String) {
		Row(id: $id) {
			column {
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
