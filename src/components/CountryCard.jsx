import React from 'react';

export default function CountryCard({
	name,
	code,
	currency,
	capital,
	continent,
	language,
}) {
	// flagpedia only supports lower case codes
	code = code.toLowerCase();
	console.log(language);
	return (
		<div className='rounded-lg p-4 shadow-md bg-white space-y-2'>
			<div className='flex gap-2 items-center'>
				<img
					src={`https://flagpedia.net/data/flags/icon/40x30/${code}.webp`}
					alt={`flag of ${name}`}
				/>
				<h2 className='text-xl font-bold'>{name}</h2>
			</div>
			<p>
				{name} is located in {continent}, their capital is {capital} and they use{' '}
				{currency} as their currency
			</p>
		</div>
	);
}
