import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ onSearch }) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => {
		onSearch(searchQuery);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<div>
			<TextField
				sx={{
					'& .MuiOutlinedInput-root': {
						color: 'white',
						'& fieldset': {
							borderColor: '#2196f3',
							borderWidth: 4,
						},
						'&:hover fieldset': {
							borderColor: '#2196f3',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#1d72db',
							borderWidth: 4,
						},
					},
					'& .MuiInputLabel-root': {
						color: 'white',
					},
				}}
				label='Search'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				onKeyDown={handleKeyDown}
				fullWidth
				variant='outlined'
				size='medium'
				InputProps={{
					startAdornment: (
						<InputAdornment position='end'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
			<button
				style={{
					backgroundColor: '#2196f3',
					color: 'white',
					padding: '10px 20px',
					marginTop: '5px',
				}}
				onClick={handleSearch}
			>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
