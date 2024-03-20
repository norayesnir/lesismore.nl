import { gql } from "@apollo/client";

export const GetArticle = gql`
	query GetArticles($slug: String!) {
		Article(slug: $slug) {
			_id
			_slug
			_created_on
			_locale
			title
			cover {
				_id
				url
			}
			excerpt
			content {
				__typename
				... on Text {
					__typename
					_id
				}
			}
		}
	}
`;
