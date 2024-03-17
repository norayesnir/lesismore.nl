import { gql } from "@apollo/client";
import { GetRoutesFragment } from "./getRoutes";
import { MenuCTAFragment } from "./getCta";

export const GetMainNavigation = gql`
	query {
		Navigation(id: "74daf973-00a6-44a8-ad7e-3a589b64d46d") {
			_id
			title
			_slug
			menu_items {
				__typename
				...GetRoutesFields
			}
			...GetCTAFields
			logo {
				_id
				url
				caption
			}
		}
	}
	${GetRoutesFragment}
	${MenuCTAFragment}
`;
