import { useState } from 'react';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import { useCountries } from '../hooks/useCountries';
import IconLoading from '../icons/IconLoading';

export default function SearchCountries() {
	const [filteredData, setFilteredData] = useState([]);

	const { loading, error, data } = useCountries();

	if (loading || error) {
		return (
			<span className='m-auto flex justify-center h-screen items-center'>
				<IconLoading />
			</span>
		);
	}

	// Continents in which the filtered countries are located.
	let filteredContinents = [];
	filteredData.forEach((country) => {
		if (!filteredContinents.includes(country.continent.name)) {
			filteredContinents.push(country.continent.name);
		}
	});

	return (
		<div>
			<h1 className='font-bold text-3xl mt-4'>Country Search</h1>
			<p>Get information about countries and territories!</p>
			<SearchBar data={data} setFilteredData={setFilteredData} />
			{/* Continents */}
			<section className='my-2'>
				<p className='text-center'>
					These countries / territories are located in...
				</p>
				<div className='flex justify-evenly flex-wrap'>
					{filteredContinents.map((continent) => (
						<p className='font-semibold p-1 text-lg'>{continent}</p>
					))}
				</div>
			</section>
			{/* Countries */}
			<section className='grid  md:grid-cols-3 gap-4 mb-8'>
				{filteredData.map((c, index) => (
					<CountryCard
						key={index}
						name={c.name}
						currency={c.currency}
						capital={c.capital}
						continent={c.continent.name}
						languages={c.languages}
						code={c.code}
					/>
				))}
			</section>
		</div>
	);
}
