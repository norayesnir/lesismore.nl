import { gql } from "@apollo/client";

export const GetPage = gql`
	query GetPage($slug: String) {
		Page(slug: $slug) {
			_id
			_slug
			title
			stack {
				__typename
			}
		}
	}
`;
