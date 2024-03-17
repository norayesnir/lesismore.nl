import { gql } from "@apollo/client";
import { ArticleFragment } from "./getArticle";

export const GetArticles = gql`
	query {
		Articles {
			items {
				...GetArticleFields
			}
		}
	}
	${ArticleFragment}
`;
