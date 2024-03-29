import { gql } from "@apollo/client";

export const GetBlog = gql`
	query GetBlog($slug: String) {
		Page(slug: $slug) {
			_id
			_slug
			title
			__typename
			hero {
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

			stack {
				__typename
				... on Article {
					_id
					__typename
				}
			}
		}
	}
`;
