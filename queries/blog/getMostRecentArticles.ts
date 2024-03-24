import { gql } from "@apollo/client";

export const GetMostRecentArticles = gql`
	query GetMostRecentArticles {
		Articles(limit: 3) {
			items {
				__typename
				_id
				_slug
				title
				excerpt
				cover {
					url
					caption
					_id
				}
			}
		}
	}
`;
