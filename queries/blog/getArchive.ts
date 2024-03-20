import { gql } from "@apollo/client";

export const GetArchive = gql`
	query GetArchive {
		Articles {
			items {
				__typename
				_id
				_slug
				_created_on
				_locale
				title
				excerpt
				cover {
					_id
					url
				}
			}
		}
	}
`;
