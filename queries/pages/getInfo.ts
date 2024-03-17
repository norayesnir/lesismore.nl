import { gql } from "@apollo/client";

export const GetPageInfo = gql`
	query {
		Pages {
			items {
				_id
				_slug
				title
			}
		}
	}
`;
