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
import Navbar from './Navbar';
import AssetFetch from './AssetFetch';
import AssetDetails from './AssetDetails';
import { useState } from 'react';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { useAssetContext } from './addToPackage';
import { Link } from 'react-router-dom';


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


export default function AssetList() {
  const [showDetails, setShowDetails] = useState(false);
  const [currentAsset, setCurrentAsset] = useState(null);

  function resetView() {
    setShowDetails(false);
    setCurrentAsset(null);
  }

  // const {  } = useParams();
  const { assetData, error } = AssetFetch()

  const { addAsset, setAddAsset } =
    useAssetContext();
  const navigate = useNavigate();

  const addToPackage = (asset) => {
    navigate('/packages');
  };
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Navbar />
        </Toolbar>
      </AppBar>
      <main>
			<Box
			sx={{
				// bgcolor: 'red',
				// backgroundImage: 'url(https://i.pinimg.com/originals/9d/73/af/9d73af36e486def0f4c81aa372b8655c.gif)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				pt: 8,
				pb: 6,
			}}
		>
			<Container sx={{
				// bgcolor: 'rgba(0, 0, 0, 0.5)',
			}}>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="white"
					gutterBottom
				>ASSETS DETAILS
				</Typography>
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image="/static/images/cards/contemplative-reptile.jpg"
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Needs to fetch Name
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Needs to fetch details
						</Typography>
					</CardContent>
					<CardActions>
          <Button
						component={Link}
						to='/asset_list'
						variant='contained'
						color='primary'
					>
						Asset List
					</Button>
						{/* <Button
							variant='contained'
							color='primary'
							size="small" onClick={() => addToPackage(asset)}>
							Add to Package
						</Button> */}
					</CardActions>
				</Card>
			</Container>
		</Box>
      </main>
      {/* Footer */}
      <Box sx={{
        bgcolor: 'primary.main',
        pt: 8,
        pb: 6,
      }}
        component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
        </Typography>
        <Home />
      </Box>
      {/* End footer */}
    </>
  );
}