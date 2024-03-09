import { gql } from "@apollo/client";

export const GetContentBlock = gql`
	query GetContentBlock($id: String) {
		ContentBlock(id: $id) {
			colunm {
				title
				text
				rounding
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
