import { gql } from "@apollo/client";

export const GetArchive = gql`
	query GetArchive {
		Articles {
			items {
				__typename
				_id
			}
		}
	}
`;
