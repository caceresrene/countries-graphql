import React from 'react';
import { useContries } from '../hooks/useContries';

export default function SearchCountries() {
	const { loading, error, data } = useContries();
	if (loading || error) {
		return <p>Loading</p>;
	}
	return (
		<div>
			{data.countries.map((c) => (
				<p>{c.name}</p>
			))}
		</div>
	);
}
