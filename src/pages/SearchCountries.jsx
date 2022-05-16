import React from 'react';
import CountryCard from '../components/CountryCard';
import { useContries } from '../hooks/useContries';

export default function SearchCountries() {
	const { loading, error, data } = useContries();
	if (loading || error) {
		return <p>Loading</p>;
	}
	return (
		<div>
			<h1 className='font-bold text-2xl my-4'>Country Search</h1>
			<section className='grid  md:grid-cols-3 gap-4'>
				{data.countries.map((c, index) => (
					<CountryCard
						key={index}
						name={c.name}
						emoji={c.emoji}
						currency={c.currency}
						capital={c.capital}
						continent={c.continent.name}
						language={c.languages.name}
						code={c.code}
					/>
				))}
			</section>
		</div>
	);
}
