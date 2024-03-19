import { gql } from "@apollo/client";

export const GetFooter = gql`
	query {
		Footer {
			_id
			title
			navigations {
				__typename
				... on Navigation {
					_id
					title
					menu_items {
						__typename
						_id
						title
						link_to_page {
							__typename
							_id
							_slug
						}
					}
				}
			}
			logo {
				__typename
				_id
				url
			}
		}
	}
`;
