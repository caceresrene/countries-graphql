import { useState } from 'react';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import { useCountries } from '../hooks/useCountries';

export default function SearchCountries() {
	const [filteredData, setFilteredData] = useState([]);

	const { loading, error, data } = useCountries();
	if (loading || error) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<h1 className='font-bold text-3xl mt-4'>Country Search</h1>
			<p>Get information about countries and territories!</p>
			<SearchBar data={data} setFilteredData={setFilteredData} />
			<section className='grid  md:grid-cols-3 gap-4'>
				{filteredData.map((c, index) => (
					<CountryCard
						key={index}
						name={c.name}
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
