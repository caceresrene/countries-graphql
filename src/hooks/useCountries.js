import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
	query {
		countries {
			name
			languages {
				name
			}
			continent {
				name
			}
			currency
			emoji
			capital
			code
		}
	}
`;

export function useCountries() {
	const { error, loading, data } = useQuery(GET_COUNTRIES);
	return {
		error,
		loading,
		data,
	};
}
