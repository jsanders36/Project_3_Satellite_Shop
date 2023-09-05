import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Navbar from './Navbar';
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import AssetFetch from './AssetFetch'

function Home() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="rgba(0, 0, 0, 1)" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Project 3: Team 1
      </Link>{' SDI#18 '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Requests() {
  const [packageData, setPackageData] = useState([]);
  // const [requestData, setRequestData] = useState([]);
  const [error, setError] = useState(null);
  // const { assetData } = AssetFetch();

  const packageURL = "http://localhost:8085/packages";
  // const requestURL = "http://localhost:8085/assets_packages"

    useEffect(() => {
        async function fetchPackage() {
            try {
                const response = await fetch(packageURL);
                if (!response.ok) {
                  throw new Error("Package not found");
                }
                var data = await response.json();
                console.log('Fetched Package data:', data);
                // data = data.map((item) => ({...item, approval_status:`${data.approval_status}`}))
                setPackageData(data);

            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            }
        }
        fetchPackage();
    }, []);

  //   useEffect(() => {
  //     async function fetchRequest() {
  //         try {
  //             const response = await fetch(requestURL);
  //             if (!response.ok) {
  //               throw new Error("Request not found");
  //             }
  //             var data = await response.json();
  //             console.log('Fetched Request data:', data);
  //             setRequestData(data);

  //         } catch (error) {
  //             console.error("Error fetching data:", error);
  //             setError(error.message);
  //         }
  //     }
  //     fetchRequest();
  //   }, []);

  // const combinedData = [...packageData, ...requestData, ...assetData];

  // const filteredData = requestData.filter((allData) => {
  //   if (
  //     (requestData.packages_id === packageData.id) &&

  //     (requestData.assets_id === assetData.id))
  //  {
  //     return true;
  //   }
  //   return false;
  // })


  // console.log("Combined Data:", combinedData);
  return (
    <>
			<AppBar position='relative'>
				<Toolbar>
					<Navbar />
				</Toolbar>
			</AppBar>
			<main>
				<Box
					sx={{
						bgcolor: 'red',
						backgroundImage:
							'url(https://i.pinimg.com/originals/9d/73/af/9d73af36e486def0f4c81aa372b8655c.gif)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						pt: 8,
						pb: 6,
					}}
				>
					<Container
						sx={{
							bgcolor: 'rgba(0, 0, 0, 0.5)',
						}}
					>
						<Typography
							component='h1'
							variant='h2'
							align='center'
							color='white'
							gutterBottom
						>
							REQUESTS
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='white'
							paragraph
						></Typography>
						<Typography variant='h5' align='center' color='white' paragraph>
							Achieving and Sustaining Space Superiority: Your Mission is Our
							Commitment.
						</Typography>
						{/* <Stack
							sx={{ pt: 4 }}
							direction='row'
							spacing={2}
							justifyContent='center'
						>
							<Dropdown
								label='Mission Type'
								url='http://localhost:8085/assets'
								dataType={'mission_type'}
								selectedValue={selectedMissionType}
								setSelectedValue={setSelectedMissionType}
							/>
							<Dropdown
								label='Orbital Regime'
								url='http://localhost:8085/assets'
								dataType={'orbital_regime'}
								selectedValue={selectedOrbitalRegime}
								setSelectedValue={setSelectedOrbitalRegime}
							/>
						</Stack> */}
						{/* <SearchBar onSearch={handleSearch} /> */}
					</Container>
				</Box>
				<Box
					sx={{
						bgcolor: 'rgba(0, 0, 0, 0.9)',
						backgroundImage:
							'url(https://cdn.wallpapersafari.com/88/66/Uowyg0.jpg)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						py: 8,
					}}
				>
					<Container sx={{ py: 8 }} maxWidth='lg'>
							<Grid container spacing={4}>
								{packageData?.map((packages) => (
									<Grid item key={packages.id} xs={12} sm={6} md={4} xl={3}>
										<Card
											sx={{
												height: '100%',
												display: 'flex',
												flexDirection: 'column',
												border: '1px solid #2196f3',
												boxShadow: '0 0 20px rgba(33, 150, 243, 0.9)',
											}}
										>
											{/* <CardMedia
												component='img'
												image={asset.image}
												alt={asset.id}
											/> */}
											<CardContent sx={{ flexGrow: 1 }}>
												<Typography gutterBottom variant='h5' component='h2'>
													{packages.name}
												</Typography>
												<Typography>
													<ul>
														<li>Package Mission: {packages.mission_description}</li>
                            <li>Approval Status: {packages.approval_status}</li>
                            {/* {console.log(packages)} */}
													</ul>
												</Typography>
											</CardContent>
											{/* <CardActions>
												<Button
													component={RouterLink}
													to={`/asset_list/${asset.id}`} // Notice asset.id
													variant='contained'
													color='primary'
												>
													Details
												</Button>

												<Button
													variant='contained'
													color='primary'
													disabled={asset.isAdded}
													onClick={() => {
														if (asset && !error) {
															setAddAsset([...addAsset, asset]);
															asset.isAdded = true;
															// setFilteredAssets(asset.isAdded);
															// PackageCheck(asset);
														}
													}}
												>
													{asset.isAdded ? 'Already added!' : 'Add Asset'}
												</Button>
											</CardActions> */}
										</Card>
									</Grid>
								))}
							</Grid>

					</Container>
				</Box>
			</main>
			{/* Footer */}
			<Box
				sx={{
					bgcolor: 'primary.main',
					pt: 8,
					pb: 6,
				}}
				component='footer'
			>
				<Typography variant='h6' align='center' gutterBottom></Typography>
				<Typography
					variant='subtitle1'
					align='center'
					color='white'
					component='p'
				></Typography>
				<Home />
			</Box>
			{/* End footer */}
		</>
	);
}
// add