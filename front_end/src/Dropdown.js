import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown({ label, url, dataType }) {
	const [selectedValue, setSelectedValue] = useState('');
	const [data, setData] = useState([]);

	const url = 'http://localhost:8085/assets';

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Unable to fetch data');
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
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
			<FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
				<Select
					labelId={`${label.toLowerCase()}-label`}
					id={`${label.toLowerCase()}-select`}
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
