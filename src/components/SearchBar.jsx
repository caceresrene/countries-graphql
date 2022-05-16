import { useState } from 'react';
import IconSearch from '../icons/IconSearch';

export default function SearchBar({ data, setFilteredData }) {
	const [wordEntered, setWordEntered] = useState('');

	const handleFilter = (event) => {
		const wordSearched = event.target.value;
		setWordEntered(wordSearched);
		console.log(wordEntered);
		// array with filtered names
		const newFilter = data.countries.filter((country) => {
			return country.name.toLowerCase().startsWith(wordSearched.toLowerCase());
		});
		// ! assuming you don't have to show anything the input is empty
		if (wordSearched === '') {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	return (
		<>
			<nav className='my-4 flex gap-2 items-center bg-white p-2 rounded-md shadow-md ring-none border-none'>
				<label htmlFor='search'>
					<IconSearch />
				</label>
				<input
					name='search'
					id='search'
					className='p-2 w-full outline-0'
					type='text'
					placeholder='Search for countries'
					value={wordEntered}
					onChange={handleFilter}
				/>
			</nav>
		</>
	);
}
