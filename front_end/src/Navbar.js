import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = () => {
	return (
		<nav>
			<ul
				style={{
					listStyle: 'none',
					display: 'flex',
					gap: '10px',
					justifyContent: 'center',
				}}
			>
				<li>
					<Button component={Link} to='/' variant='contained' color='primary'>
						Home
					</Button>
				</li>
				<li>
					<Button
						component={Link}
						to='/asset_list'
						variant='contained'
						color='primary'
					>
						Asset List
					</Button>
				</li>
				<li>
					<Button
						component={Link}
						to='/packages'
						variant='contained'
						color='primary'
					>
						Packages
					</Button>
				</li>
				<li>
					<Button
						component={Link}
						to='/requests'
						variant='contained'
						color='primary'
					>
						Requests
					</Button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
