import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown({ label, url, dataType, selectedValue, setSelectedValue }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Unable to fetch data');
				}
				return response.json();
			})
			.then((data) => {
				const uniqueData = data.filter(
					(item, index, self) =>
						self.findIndex((t) => t[dataType] === item[dataType]) === index
				);

				setData(uniqueData);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, [url]);

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div>
			<FormControl variant='filled' sx={{ m: 1, minWidth: 160 }}>
				<InputLabel id={`${label}`} style={{ color: 'blue' }}>
					{label}
				</InputLabel>
				<Select
					style={{ backgroundColor: '#2196f3', color: 'white' }}
					labelId={`${label}`}
					id={`${label}-select`}
					value={selectedValue}
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>Any</em>
					</MenuItem>
					{data.map((item) => (
						<MenuItem key={item.id} value={item[dataType]}>
							{item[dataType]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default Dropdown;
