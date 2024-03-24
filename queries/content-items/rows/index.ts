import { gql } from "@apollo/client";
import { ContentFragment } from "./getContentFragment";

export const GetRows = gql`
	query GetRows($id: String) {
		Row(id: $id) {
			_id
			__typename

			row_content
			title
			text
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

			most_recent_articles

			column {
				__typename

				... on Content {
					__typename
					...GetContentFields
				}

				... on Article {
					__typename
					_id
				}
			}
		}
	}
	${ContentFragment}
`;
