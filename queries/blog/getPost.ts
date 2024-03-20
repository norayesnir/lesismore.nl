import { gql } from "@apollo/client";

export const GetPost = gql`
	query GetPost($id: String!) {
		Article(id: $id) {
			_id
			_slug
			_created_on
			_locale
			title
			cover {
				url
			}
			excerpt
		}
	}
`;
