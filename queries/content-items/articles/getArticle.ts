import { gql } from "@apollo/client";

export const ArticleFragment = gql`
	fragment GetArticleFields on Article {
		_id
		title
		_slug
		cover {
			_id
			url
		}
		excerpt
		content {
			__typename
		}
		seo {
			_id
			title
			description
			social_media_image {
				_id
				url
			}
		}
	}
`;
